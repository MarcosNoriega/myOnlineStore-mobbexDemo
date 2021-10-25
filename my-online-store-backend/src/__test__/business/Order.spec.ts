import Order from '../../business/Order';
import Payment from '../../payment/Payment.interface';
import { response, request } from 'express';

class PaymentServiceMock implements Payment {
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
        const paymentService = new PaymentServiceMock();
    
        const orderRepository = new OrderRepository();
    
        const order = new Order(paymentService, orderRepository);
    
        expect(order).toBeInstanceOf(Order);
    });
    
    it('should execute the method checkout and create a Order', async () => {
        const paymentService = new PaymentServiceMock();
    
        const orderRepository = new OrderRepository();
    
        const order = new Order(paymentService, orderRepository);
        /*request.body = {
            total: '1011',
            items: [
              {
                _id: '616dea3df950dcd79f960965',
                name: 'blandit',
                description: 'pede. Suspendisse dui. Fusce diam nunc, ullamcorper',
                price: 1011,
                __v: 0,
                quantity: 1,
                total: 1011
              }
            ],
            description: 'Checkout de Prueba',
            reference: '1635130294275',
            currency: 'ARS',
            test: true,
            customer: {
              email: 'demo@mobbex.com',
              name: 'Cliente Demo',
              identification: '12123123'
            },
            webhook: 'webhook',
            return_url: 'return_url'
        }*/
        request.body = {}
        await order.checkout(request, response);
    
        expect(createOrder.mock.calls).toEqual([
            [
                {
                    total: '2709',
                    description: 'Checkout de Prueba',
                    reference: '1635129617618',
                    currency: 'ARS',
                    test: true,
                    return_url: 'https://3c60-190-229-6-37.ngrok.io/return_url',
                    webhook: 'https://3c60-190-229-6-37.ngrok.io/webhook',
                    customer: {
                      email: 'demo@mobbex.com',
                      name: 'Cliente Demo',
                      identification: '12123123'
                    },
                    items: [ { quantity: 1, description: 'cursus', total: 2709 } ]
                  }
            ]
        ]);
    });
})


