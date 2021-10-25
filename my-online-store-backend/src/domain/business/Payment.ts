import { Request, Response} from 'express';
import PaymentRepository from '../../infrastructure/repositories/db/Mongo/Payment/payment.repository';
import PaymentDto from '../services/PaymentDto';

export default class Payment {
    constructor(private paymentRepository: PaymentRepository) {}

    async create(req: Request, res: Response) {
        try {
            const dataOrder = req.body;

            const dataOrderMap = new PaymentDto(dataOrder);

            const payment = await this.paymentRepository.create(dataOrderMap);

            return payment;
        } catch (error) {
            res.status(500).send('an unexpected error ocurred')
        }
    }
}