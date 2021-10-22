import Payment from '../payment/Payment.interface';
import { Request, Response} from 'express';
import OrderRepository from '../repositories/order/order.repository';
import OrderDto from '../services/OrderDto';

class Order {
    constructor(private payment: Payment, private orderRepository: OrderRepository) {}

    async checkout(req: Request, res: Response) {
        const dataOrder = req.body;

        // set url return and webhook
        dataOrder.webhook = process.env.WEBHOOK;
        dataOrder.return_url = process.env.RETURN_URL;

        const orderDto = new OrderDto(dataOrder);


        const responseMobbex = await this.payment.checkout(orderDto);
    
        return res.json(responseMobbex);
    }

    async createOrder(req: Request, res: Response) {
        const dataOrder = req.body;

        await this.orderRepository.createOrder(dataOrder);
    }
}

export default Order;