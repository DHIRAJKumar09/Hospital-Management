import mongoose from 'mongoose';




const ProductSchema = new mongoose.Schema(
  {
    productname: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, default: 0, min: 0 },
    category: { 
      type: String, 
      enum: ['fruits', 'vegetable', 'electronics'], 
      required: true 
    },
    image:{
      type:String,
      default:'https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569_1280.jpg'
    }
  },
  { timestamps: true } 
);


const Product = mongoose.models.Products || mongoose.model('Products', ProductSchema);

export default Product; 
