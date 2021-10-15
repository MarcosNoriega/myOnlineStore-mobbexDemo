import Payment from '../payment/Payment.interface';
import { Request, Response} from 'express';
import OrderRepository from '../repositories/order/order.repository';

class Order {
    constructor(private payment: Payment, private orderRepository: OrderRepository) {}

    async checkout(req: Request, res: Response) {
        const data = req.body;
    
        const responseMobbex = await this.payment.checkout(data);
    
        return res.json(responseMobbex);
    }

    async createOrder(req: Request, res: Response) {
        const dataOrder = req.body;

        await this.orderRepository.createOrder(dataOrder);
    }
}

export default Order;