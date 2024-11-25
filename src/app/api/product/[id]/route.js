import dbConnect from "@/lib/Mongodbconn";
import Product from "@/models/productmodel";
import { NextResponse } from "next/server";

export async function PUT(req){
    await dbConnect();
    try{
      const body = await req.json();
      const {id,productname,description,price,category,image} = body;
      if(!id || !productname || !description || !price || !category ){
        return NextResponse.json({message:"Please fill all required field",success:false},{status:400});
      }
      const updatedproduct = await Product.findByIdAndUpdate(id,{productname,description,price,category,image},{new:true});
  
      if(!updatedproduct){
        return NextResponse.json({success:false,message:"Product not found"},{status:404});
      }
      return NextResponse.json({success:true,message:"Product Updated",product:updatedproduct},{status:201});
  
    }catch(error){
      console.error("Error updating product:", error);
      return NextResponse.json(
        { success: false, message: "Internal server error.", error: error.message },
        { status: 500 }
      );
  
    }
  }


  export async function DELETE(req,{params}) {
    try {
      // Parse the request body
      const body = params;
      const { id } = params;
  
      // Check if ID is provided
      if (!id) {
        return NextResponse.json(
          { success: false, message: "Product ID is required." },
          { status: 400 }
        );
      }
  
      // Delete the product by ID
      const product = await Product.findByIdAndDelete(id);
  
      // Handle case where product is not found
      if (!product) {
        return NextResponse.json(
          { success: false, message: "Product not found." },
          { status: 404 }
        );
      }
  
      // Respond with success
      return NextResponse.json(
        { message: "Product successfully deleted.", product, success: true },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error deleting product:", error);
      return NextResponse.json(
        { success: false, message: "Internal server error.", error: error.message },
        { status: 500 }
      );
    }
  }
  