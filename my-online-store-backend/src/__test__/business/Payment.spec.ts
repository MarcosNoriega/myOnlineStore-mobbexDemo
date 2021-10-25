import { response, request } from 'express';
import Payment from '../../domain/business/Payment';

describe('', () => {
    let PaymentRepository: jest.Mock<any, any>;
    let create: jest.Mock<any, any>;
    beforeEach(() => {
        create = jest.fn()   

        PaymentRepository = jest.fn().mockImplementation(() => {
            return { create };
        });
    })

    it('should ', () => {
        const paymentRepository = new PaymentRepository();

        const payment = new Payment(paymentRepository);

        expect(payment).toBeInstanceOf(Payment);
    });

    it('should ', async () => {
        const paymentRepository = new PaymentRepository();

        const payment = new Payment(paymentRepository);

        request.body = {
            type: 'checkout',
            'data[result]': 'true',
            'data[view][type]': 'card',
            'data[payment][id]': '5dyoqM7kH',
            'data[payment][description]': 'Checkout de Prueba',
            'data[payment][operation][type]': 'payment.v2',
            'data[payment][status][code]': '200',
            'data[payment][status][text]': 'Aprobado',
            'data[payment][status][message]': 'Transacción Aprobada',
            'data[payment][status][view]': 'default',
            'data[payment][total]': '1011',
            'data[payment][currency][code]': 'TEST',
            'data[payment][currency][text]': 'Test Money',
            'data[payment][currency][symbol]': 'T$',
            'data[payment][currency][locale]': 'es',
            'data[payment][riskAnalysis][band]': 'N/A',
            'data[payment][riskAnalysis][level]': 'N/A',
            'data[payment][created]': '2021-10-25T03:19:45.551Z',
            'data[payment][updated]': '2021-10-25T03:19:45.713Z',
            'data[payment][reference]': '1635131966998',
            'data[payment][source][name]': 'Visa Débito',
            'data[payment][source][type]': 'card',
            'data[payment][source][reference]': 'visa.debit',
            'data[payment][source][number]': '234324******4519',
            'data[payment][source][cardholder][name]': 'Demo',
            'data[payment][source][cardholder][identification]': '12121212',
            'data[payment][source][expiration][month]': '12',
            'data[payment][source][expiration][year]': '34',
            'data[payment][source][installment][description]': 'Debito',
            'data[payment][source][installment][amount]': '1011',
            'data[payment][source][installment][count]': '1',
            'data[payment][source][installment][reference]': '1_debit',
            'data[entity][name]': 'Demo',
            'data[entity][uid]': 'H1rJEXyr',
            'data[customer][name]': 'Cliente Demo',
            'data[customer][email]': 'demo@mobbex.com',
            'data[customer][identification]': '12123123',
            'data[customer][phone]': '123454321',
            'data[customer][uid]': '1',
            'data[customer][token]': '3-3-3-3-33-',
            'data[customer][address]': 'Mi Dirección',
            'data[customer][addressNumber]': '123',
            'data[customer][addressNotes]': '...',
            'data[customer][zipCode]': '5000',
            'data[customer][country]': 'ARG',
            'data[user][name]': 'Cliente Demo',
            'data[user][email]': 'demo@mobbex.com',
            'data[source][name]': 'Visa Débito',
            'data[source][type]': 'card',
            'data[source][reference]': 'visa.debit',
            'data[checkout][uid]': '0JTB0J5B3U76J8TJT9',
            'data[checkout][total]': '1011',
            'data[checkout][currency]': 'ARS'
        };
        const res = await payment.create(request, response);

        expect(create.mock.calls).toEqual([
            [
                {
                       "data": {
                         "checkout": {
                           "currency": "ARS",
                           "total": "1011",
                           "uid": "0JTB0J5B3U76J8TJT9",
                         },
                         "customer": {
                           "email": "demo@mobbex.com",
                           "identification": "12123123",
                           "name": "Cliente Demo",
                           "phone": "123454321",
                           "uid": "1",
                         },
                         "payment": {
                           "created": "2021-10-25T03:19:45.551Z",
                           "description": "Checkout de Prueba",
                           "id": "5dyoqM7kH",
                           "reference": "1635131966998",
                           "source": {
                             "cardholder": {
                               "identification": "12121212",
                               "neme": "Demo",
                             },
                             "expiration": {
                               "month": "12",
                               "year": "34",
                             },
                             "installment": {
                               "amount": "1011",
                               "count": "1",
                               "description": "Debito",
                               "reference": "1_debit",
                             },
                             "name": "Visa Débito",
                             "number": "234324******4519",
                             "referece": "visa.debit",
                             "type": "card",
                           },
                           "status": {
                             "message": "Transacción Aprobada",
                             "text": "Aprobado",
                             "view": "default",
                           },
                           "update": "2021-10-25T03:19:45.713Z",
                         },
                         "source": {
                           "name": "Visa Débito",
                           "reference": "visa.debit",
                           "type": "card",
                         },
                       },
                       "type": "checkout",
                     }
            ]
        ]);
    });
})