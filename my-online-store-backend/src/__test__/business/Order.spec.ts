import Order from '../../domain/business/Order';
import Payment from '../../interfaces/Payment.interface';
import { response, request } from 'express';
import IdGenerator from '../../interfaces/IdGenerator.interface';

class PaymentServiceMock implements Payment {
    generatePayOrder = jest.fn((data: object) => {
        return {}
    })

    checkout = jest.fn((data: object) => {
        return {}
    })
};

class IdGeneratorMock implements IdGenerator {
    generateId = jest.fn(() => {
        return "af289cbc-a65b-414d-b0d9-b66a9609d5d9"
    })
}

describe('Order business', () => {
    let OrderRepository: any;
    let createOrder: any;
    let updateStatusByReference: any;

    beforeEach(() => {
        createOrder = jest.fn().mockResolvedValue({});
        updateStatusByReference = jest.fn().mockReturnValue({})
        OrderRepository = jest.fn().mockImplementation(() => {
            return { createOrder, updateStatusByReference };
        });
    })
    
    it('should create an instance of Order', async () => {
        const paymentService = new PaymentServiceMock();
        const orderRepository = new OrderRepository();
        const idGenerator = new IdGeneratorMock();
    
        const order = new Order(paymentService, orderRepository, idGenerator);
    
        expect(order).toBeInstanceOf(Order);
    });
    
    it('should execute the method checkout and create a Order', async () => {
        const paymentService = new PaymentServiceMock();
        const orderRepository = new OrderRepository();
        const idGenerator = new IdGeneratorMock();
    
        const order = new Order(paymentService, orderRepository, idGenerator);
        request.body = {
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
            currency: 'ARS',
            test: true,
            customer: {
              email: 'demo@mobbex.com',
              name: 'Cliente Demo',
              identification: '12123123'
            }
        }
        response.json = jest.fn().mockReturnValue({});

        await order.checkout(request, response);

        expect(createOrder.mock.calls).toEqual([
            [
                {
                    total: '1011',
                    description: 'Checkout de Prueba',
                    reference: 'af289cbc-a65b-414d-b0d9-b66a9609d5d9',
                    currency: 'ARS',
                    test: true,
                    return_url: undefined,
                    webhook: undefined,
                    customer: {
                      email: 'demo@mobbex.com',
                      name: 'Cliente Demo',
                      identification: '12123123'
                    },
                    items: [ { quantity: 1, description: 'blandit', total: 1011 } ]
                  }
            ]
        ]);
    });

    describe('method updateStatus', () => {
        it('should execute the method updateStatus for update a order a status Pendiente de Pago', () => {
            const paymentService = new PaymentServiceMock();
            const orderRepository = new OrderRepository();
            const idGenerator = new IdGeneratorMock();
        
            const order = new Order(paymentService, orderRepository, idGenerator);
    
            order.updateStatus('e18c3a8e-4b57-4c8c-8036-45eadef5d3c1', "En Espera");
    
            expect(updateStatusByReference.mock.calls).toEqual([
                [
                    "e18c3a8e-4b57-4c8c-8036-45eadef5d3c1",
                    "Pendiente de Pago"
                ]
            ])
        });

        it('should execute the method updateStatus for update a order a status Pagado', () => {
            const paymentService = new PaymentServiceMock();
            const orderRepository = new OrderRepository();
            const idGenerator = new IdGeneratorMock();
        
            const order = new Order(paymentService, orderRepository, idGenerator);
    
            order.updateStatus('e18c3a8e-4b57-4c8c-8036-45eadef5d3c1', "Aprobado");
    
            expect(updateStatusByReference.mock.calls).toEqual([
                [
                    "e18c3a8e-4b57-4c8c-8036-45eadef5d3c1",
                    "Pagado"
                ]
            ])
        });

        it('should execute the method updateStatus for update a order a status Pendiente de Pago', () => {
            const paymentService = new PaymentServiceMock();
            const orderRepository = new OrderRepository();
            const idGenerator = new IdGeneratorMock();
        
            const order = new Order(paymentService, orderRepository, idGenerator);
    
            order.updateStatus('e18c3a8e-4b57-4c8c-8036-45eadef5d3c1', "Rechazado");
    
            expect(updateStatusByReference.mock.calls).toEqual([
                [
                    "e18c3a8e-4b57-4c8c-8036-45eadef5d3c1",
                    "Pendiente de Pago"
                ]
            ])
        });
    })
})


