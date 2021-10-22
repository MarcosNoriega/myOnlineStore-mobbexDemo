export interface OrderData {
    total: string;
    description: string;
    reference: string;
    currency: string;
    test: boolean;
    return_url: string;
    webhook: string;
    customer: Customer;
    items: Item[]
  }
  
  export interface Customer {
    email: string;
    name: string;
    identification: string;
  }

  export interface Item {
    image?: string
    quantity: number
    description: string
    total: number
  }