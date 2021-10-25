export default class PaymentRepository {
    constructor(private PaymentModel: any) {}

    public async create(dataPayment: object) {
        const payment = this.PaymentModel(dataPayment);

        await payment.save();

        return payment;
    }
}