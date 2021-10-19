export default class OrderRepository {
    constructor(private OrderModel: any) {}

    public async createOrder(dataOrder: object) {
        const order = this.OrderModel(dataOrder);

        await order.save();
    }
}