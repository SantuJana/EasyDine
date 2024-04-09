import { Schema, model, modelNames, models } from "mongoose";

const productSchema = new Schema({
  name: { type: String, require: true, unique: true },
  slug: { type: String, require: true, unique: true },
  description: { type: String, require: true },
  thumbImage: { type: String, require: true },
  images: [{ name: String, sequence: Number }],
  price: { type: Number, require: true },
  rating: { type: Number, require: false },
});

const Product = models.Product || model("Product", productSchema);
export default Product;
