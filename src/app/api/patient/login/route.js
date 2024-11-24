import { Patient } from "../../../../models/HospitalModels/PatitentModel";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";

export async function POST(req,res){
    try{
        const body =await req.json();
        console.log(body);
        const {email,password} = body;
        
        const patient = await Patient.findOne({email});
        console.log(patient);
        if(!patient){
            return NextResponse.json({
                message:"Patient is not registered , First register",
                success:false,

            },{status:404})
        }
        console.log(password,patient.password);
        const decodePassword = await bcrypt.compare(password,patient.password);
        
        if(!decodePassword){
            return NextResponse.json({
                message:"patient password doesn't match",
                success:false,
            },{status:404});
        }
        const token = {patient};
        const jwtToken =  jwt.sign(token,process.env.JWT_SECRET,{expiresIn:'5h'});
        return NextResponse.json({
            message:"login successfully",
            success:true,
            jwtToken,
        })


    }catch(error){
        console.log(error);
        return NextResponse.json({
            message:"Login failed Internal server Error",
            success:false,
        },{status:500});

    }
}