export default class OrderRepository {
    constructor(private OrderModel: any) {}

    public async createOrder(dataOrder: object) {
        const order = this.OrderModel(dataOrder);

        await order.save();

        return order;
    }

   public async updateById(id: string, dataOrder: object) {
        const order = await this.OrderModel.updateById(id, dataOrder);

        return order;
   }

   public async updateStatusByReference(reference: string, status: string) {
       const order = await this.OrderModel.updateOne({ reference }, { status });

       return order;
   }
}