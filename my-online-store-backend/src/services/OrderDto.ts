import { Customer, Item, OrderData } from "../interfaces/order.interface";

export default class OrderDto {
    total: string;
    description: string;
    reference: string;
    currency: string;
    test: boolean;
    return_url: string;
    webhook: string;
    customer: Customer;
    items: Item[];

    constructor(order: OrderData) {
        this.total = order.total;
        this.description = order.description;
        this.reference = order.reference;
        this.currency = order.currency;
        this.test = order.test;
        this.return_url = order.return_url;
        this.webhook = order.webhook;
        this.customer = order.customer;
        this.items = order.items.map((item: any) => {
            return {
                quantity: item.quantity,
                description: item.name,
                total: item.total
            }
        })
    }
        
}