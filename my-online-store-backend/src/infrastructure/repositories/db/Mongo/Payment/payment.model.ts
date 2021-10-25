import { model, Schema } from 'mongoose';

const PaymentSchema = new Schema({
    "type": {
      "type": "String"
    },
    "data": {
      "type": "Object"
    }
});

const PaymentModel = model('Payment', PaymentSchema);

export default PaymentModel;