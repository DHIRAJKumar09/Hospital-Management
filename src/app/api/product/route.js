import dbConnect from "@/lib/Mongodbconn";
import Product from "@/models/productmodel";
import { NextResponse } from "next/server";


export async function POST(req,res) {
  await dbConnect(); // Connect to the database
  try {
    const body = await req.json();
    console.log(body);

    const { productname, description, price, category } = body;

    if (!productname || !description || !price || !category) {
      return NextResponse.json({
        success: false,
        message: "All fields are required.",
        
      },{status:400});
    }

    const product = new Product({ productname, description, price, category });
    const savedProduct = await product.save();

    return NextResponse.json({
      success: true,
      message: "Product created successfully.",
      product: savedProduct,
    });
  } catch (error) {
    console.error("Error saving product:", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error.",
    });
  }
}

//get all 
export async function GET(){
    try{
        const product = await Product.find({}).lean();
        return NextResponse.json({success:true,product},{status:200});

    }catch(error){
        return NextResponse.json({success:false,message:"Error fetching product",error:error.message});

    }

}
