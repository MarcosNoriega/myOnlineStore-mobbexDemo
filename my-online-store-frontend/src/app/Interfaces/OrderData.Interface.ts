import Product from './Product.Interface';

export interface OrderData {
    total: string;
    description: string;
    reference: string;
    currency: string;
    test: boolean;
    return_url: string;
    webhook: string;
    customer: Customer;
    items: Product[];
}

export interface Customer {
    email: string;
    name: string;
    identification: string;
}


