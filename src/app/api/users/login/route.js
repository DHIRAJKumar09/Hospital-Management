import dbConnect from "@/lib/Mongodbconn";
import UsersModel from "@/models/UsersModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

export async function POST(req,res){
    try{

        const body = await req.json();
        const{email,password} = body;
        const users = await UsersModel.findOne({email});
        if(!users){
            return NextResponse.json({
                message:"User not registerd yet",
                success:false,
            },{status:404})
        }
        const decodepassword = await bcrypt.compare(password,users.password);
        if(!decodepassword){
            return NextResponse.json({
                message:"Password is not match",
                success:false,
            },{status:404})
        }
        const token =  {users:users};
        const jwtoken =  jwt.sign(token,process.env.JWT_SECRET,{expiresIn:'7d'});
        return NextResponse.json({
            message:"Login successfully",
            jwtoken,
            success:true,
        })

    }catch(error){
        return NextResponse.json({
            message:"Login failed ,internal server error",
            success:false,
        },{status:500})

    }
}