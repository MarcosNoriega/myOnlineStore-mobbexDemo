const  awilix  =  require ( 'awilix' ) 
import MobbexPayment from '../payment/Mobbex';
import AxiosAdapter from './AxiosAdapter';
import Order from '../business/Order';
import OrderRepository from '../repositories/order/order.repository';
import OrderModel from '../repositories/order/order.model';
import Product from '../business/Product';
import ProductRepository from '../repositories/product/product.repository';
import ProductModel from '../repositories/product/product.model';
import PaymentRepository from '../repositories/Payment/payment.repository';
import PaymentModel from '../repositories/Payment/payment.model';
import Payment from '../business/Payment';

// Create the container and set the injectionMode to PROXY (which is also the default).
const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC
})

container.register({
    'paymentService': awilix.asClass(MobbexPayment),
    'http': awilix.asClass(AxiosAdapter),
    'Order': awilix.asClass(Order),
    'orderRepository': awilix.asClass(OrderRepository),
    'OrderModel': awilix.asValue(OrderModel),
    'Product': awilix.asClass(Product),
    'productRepository': awilix.asClass(ProductRepository),
    'ProductModel': awilix.asValue(ProductModel),
    'Payment': awilix.asClass(Payment),
    'PaymentModel': awilix.asValue(PaymentModel),
    'paymentRepository': awilix.asClass(PaymentRepository)
})

export default container;