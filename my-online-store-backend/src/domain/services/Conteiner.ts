const  awilix  =  require ( 'awilix' ) 
import MobbexPayment from '../../infrastructure/payment/Mobbex';
import AxiosAdapter from '../../infrastructure/httpClient/AxiosAdapter';
import Order from '../business/Order';
import OrderRepository from '../../infrastructure/repositories/db/Mongo/order/order.repository';
import OrderModel from '../../infrastructure/repositories/db/Mongo/order/order.model';
import Product from '../business/Product';
import ProductRepository from '../../infrastructure/repositories/db/Mongo/product/product.repository';
import ProductModel from '../../infrastructure/repositories/db/Mongo/product/product.model';
import PaymentRepository from '../../infrastructure/repositories/db/Mongo/Payment/payment.repository';
import PaymentModel from '../../infrastructure/repositories/db/Mongo/Payment/payment.model';
import Payment from '../business/Payment';
import UuidAdapter from '../../infrastructure/IdGenerator/uuidAdapter';

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
    'paymentRepository': awilix.asClass(PaymentRepository),
    'idGenerator': awilix.asClass(UuidAdapter)
})

export default container;