import { model, Schema } from 'mongoose';

const OrderSchema = new Schema({
  "total": {
    "type": "String"
  },
  "description": {
    "type": "String"
  },
  "reference": {
    "type": "String"
  },
  "currency": {
    "type": "String"
  },
  "items": {
    "type": [
      "Mixed"
    ]
  },
  "status": {
    "type": "String",
    "default": "Nuevo"
  }
});

const OrderModel = model('Order', OrderSchema);

export default OrderModel;


 