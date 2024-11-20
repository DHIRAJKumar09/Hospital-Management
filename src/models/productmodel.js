import mongoose from 'mongoose';
import { Interface } from 'readline';



const ProductSchema = new mongoose.Schema(
  {
    productname: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, default: 0, min: 0 }, // Ensure non-negative prices
    category: { 
      type: String, 
      enum: ['fruits', 'vegetable', 'electronics'], 
      required: true 
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Use existing model if already compiled, else create a new model
const Product = mongoose.models.Products || mongoose.model('Products', ProductSchema);

export default Product; 
