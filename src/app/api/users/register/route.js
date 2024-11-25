import dbConnect from "@/lib/Mongodbconn";
import UsersModel from "@/models/UsersModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'


export async function POST(req){
    await dbConnect();
   
    try{
        const body = await req.json();
        console.log(body);
        const{username,email,password,image,role} = body;
        const users = await UsersModel.findOne({email});
        console.log(users);
        if(users){
            return NextResponse.json({
                message:"User already registered",
            },{status:400});
        }
        console.log("registereduser",users);
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = new UsersModel({
            username:username,
            email:email,
            password:hashedPassword,
            image:image,
            role:role,
        });
        const savedUser = await newUser.save();
        console.log("saveduser",savedUser);
        return NextResponse.json({
            message:"Registered Successfully",
            savedUser,
            success:true,
        })


    }catch(error){
        console.log(error);
        return NextResponse.json({
            message:"Internal server error , Registration failed",
            success:false,
        },{status:500})

    }
    
}