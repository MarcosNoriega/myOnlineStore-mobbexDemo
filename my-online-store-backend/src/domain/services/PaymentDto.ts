export default class PaymentDto {
    type: string;
    data: Object;


    constructor(dataOrder: any) {
        {
            this.type = dataOrder.type,
            this.data = {
                payment: {
                    id: dataOrder['data[payment][id]'],
                    description: dataOrder['data[payment][description]'],
                    reference: dataOrder['data[payment][reference]'],
                    status: {
                        text: dataOrder['data[payment][status][text]'],
                        message: dataOrder['data[payment][status][message]'],
                        view: dataOrder['data[payment][status][view]']
                    },
                    created: dataOrder['data[payment][created]'],
                    update: dataOrder['data[payment][updated]'],
                    source: {
                        name: dataOrder['data[payment][source][name]'],
                        type: dataOrder['data[payment][source][type]'],
                        referece: dataOrder['data[payment][source][reference]'],
                        number: dataOrder['data[payment][source][number]'],
                        expiration: {
                            month: dataOrder['data[payment][source][expiration][month]'],
                            year: dataOrder['data[payment][source][expiration][year]']
                        },
                        cardholder: {
                           neme:  dataOrder['data[payment][source][cardholder][name]'],
                           identification: dataOrder['data[payment][source][cardholder][identification]'],
                        },
                        installment: {
                            description: dataOrder['data[payment][source][installment][description]'],
                            amount: dataOrder['data[payment][source][installment][amount]'],
                            count: dataOrder['data[payment][source][installment][count]'],
                            reference: dataOrder['data[payment][source][installment][reference]'],
                        }
                    }
                },
                customer: {
                    uid: dataOrder['data[customer][uid]'],
                    name: dataOrder['data[customer][name]'],
                    phone: dataOrder['data[customer][phone]'],
                    identification: dataOrder['data[customer][identification]'],
                    email: dataOrder['data[customer][email]'],
                },
                source: {
                    name: dataOrder['data[source][name]'],
                    type: dataOrder['data[source][type]'],
                    reference: dataOrder['data[source][reference]']
                },
                checkout: {
                    uid:  dataOrder['data[checkout][uid]'],
                    total: dataOrder['data[checkout][total]'],
                    currency: dataOrder['data[checkout][currency]']
                }
            }
        }
    }
}