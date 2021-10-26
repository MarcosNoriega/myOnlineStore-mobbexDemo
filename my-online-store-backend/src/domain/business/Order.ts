import PaymentService from '../../interfaces/Payment.interface';
import { Request, Response} from 'express';
import OrderRepository from '../../infrastructure/repositories/db/Mongo/order/order.repository';
import OrderDto from '../services/OrderDto';
import IdGenerator from '../../interfaces/IdGenerator.interface';

class Order {
    constructor(private paymentService: PaymentService, private orderRepository: OrderRepository, private idGenerator: IdGenerator) {}

    /** 
    * Generates a checkout and creates an order in the database. 
    */
    async checkout(req: Request, res: Response) {
        try {
            const dataOrder = req.body;

            // set url return and webhook
            dataOrder.webhook = process.env.WEBHOOK;
            dataOrder.return_url = process.env.RETURN_URL;

            // create a id for reference property
            dataOrder.reference = this.idGenerator.generateId();

            const orderDto = new OrderDto(dataOrder);

            const responseMobbex = await this.paymentService.checkout(orderDto);

            await this.orderRepository.createOrder(orderDto);
    
            return res.json(responseMobbex);
        } catch (error) {
            console.error(error)
            res.status(500).send('an unexpected error ocurred')
        } 
    }

    /**
     * update a order
     */
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const dataOrder = req.body;
        
            await this.orderRepository.updateById(id, dataOrder);
        } catch (error) {
            res.status(500).send('an unexpected error ocurred')
        }
    }

    /**
    * Update order status according to transaction status.
    */
    async updateStatus(reference: string, statusTransaction: string) {
        try {
            let statusSelected;
            switch (statusTransaction) {
                case "En Espera":
                    statusSelected = "Pendiente de Pago"
                    break;
                
                case "Aprobado":
                    statusSelected = "Pagado";
                    break;
            
                case "Rechazado":
                    statusSelected = "Pendiente de Pago"
                    break;
                default:
                    statusSelected = "Nuevo"
                    break;
            }

            await this.orderRepository.updateStatusByReference(reference, statusSelected)
        } catch (error) {
            console.error(error);
        }
    }
}

export default Order;