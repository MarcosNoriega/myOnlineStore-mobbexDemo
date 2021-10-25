import OrderRepository from '../../repositories/order/order.repository';


describe('', () => {
    let OrderModel: any;
    beforeEach(() => {
        OrderModel = {
            updateOne: jest.fn().mockResolvedValue({}),
        }
    });

    it('should execute the method createOrder', async () => {
        OrderModel = jest.fn().mockReturnValue({
            save: jest.fn().mockResolvedValue({})
        });

        const orderRepository = new OrderRepository(OrderModel);
        await orderRepository.createOrder({});
        
        expect(OrderModel.mock.calls).toEqual([ [ {} ] ]);
    });

    it('should execute the method getById', async () => {
        const orderRepository = new OrderRepository(OrderModel);
        const res = await orderRepository.updateStatusByReference('1', "Pendiente");
        
        expect(OrderModel.updateOne.mock.calls).toEqual([
            [
                {
                    "reference": "1",
                },
                {
                    "status": "Pendiente",
                }
            ]
         ]);
        expect(res).toEqual({});
    });
})