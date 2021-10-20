import Order from '../../business/Order';
import Payment from '../../payment/Payment.interface';
import { response, request } from 'express';

class PaymentMock implements Payment {
    generatePayOrder = jest.fn((data: object) => {
        return {}
    })

    checkout = jest.fn((data: object) => {
        return {}
    })
};

describe('Order business', () => {
    let OrderRepository: any;
    let createOrder: any;

    beforeEach(() => {
        createOrder = jest.fn().mockResolvedValue({});
        OrderRepository = jest.fn().mockImplementation(() => {
            return { createOrder };
        });
    })
    
    it('should create an instance of Order', async () => {
        const payment = new PaymentMock();
    
        const orderRepository = new OrderRepository();
    
        const order = new Order(payment, orderRepository);
    
        expect(order).toBeInstanceOf(Order);
    });
    
    it('should execute the method createOrder', async () => {
        const payment = new PaymentMock();
    
        const orderRepository = new OrderRepository();
    
        const order = new Order(payment, orderRepository);
        request.body = {}
        await order.createOrder(request, response);
    
        expect(createOrder.mock.calls).toEqual([
            [
                {}
            ]
        ]);
    });
})


