import { model, Schema } from 'mongoose';

const ProductSchema = new Schema({
    "name": {
      "type": "String"
    },
    "description": {
      "type": "String"
    },
    "price": {
      "type": "Number"
    }
  });

const ProductModel = model('Product', ProductSchema);

ProductModel.createCollection();

export default ProductModel;


 