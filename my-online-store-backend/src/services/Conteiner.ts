const  awilix  =  require ( 'awilix' ) 
import MobbexPayment from '../payment/Mobbex';
import AxiosAdapter from './AxiosAdapter';
import Order from '../business/Order';
import OrderRepository from '../repositories/order/order.repository';
import OrderModel from '../repositories/order/order.model';

// Create the container and set the injectionMode to PROXY (which is also the default).
const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC
})

container.register({
    'payment': awilix.asClass(MobbexPayment),
    'http': awilix.asClass(AxiosAdapter),
    'Order': awilix.asClass(Order),
    'orderRepository': awilix.asClass(OrderRepository),
    'OrderModel': awilix.asValue(OrderModel)
})

export default container;