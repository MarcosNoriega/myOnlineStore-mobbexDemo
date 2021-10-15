export default class OrderRepository {
    constructor(private Order: any) {}

    public async createOrder(dataOrder: object) {
        const order = this.Order(dataOrder);

        await order.save();
    }
}