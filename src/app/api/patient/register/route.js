import dbConnect from '@/lib/Mongodbconn';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt'
import { Patient } from '../.././../../models/HospitalModels/PatitentModel';
export async function POST(req){
    
    try{
        await dbConnect();
        const body  = await req.json();
        console.log(body);
        const {fullname,email,password,dob,gender,contactNumber,address}=body;
        const patient = await Patient.findOne({email});
        console.log(patient);
        if(patient){
            return NextResponse.json({
                message:"Patient already registered",
                success:false,
            },{status:404});
        } 
        const salt = await bcrypt.genSalt(10);
        console.log(salt);
        const hashedPassword = await bcrypt.hash(password,salt);
        console.log(hashedPassword);
        const newUser = await Patient.create({
            fullname:fullname,
            email:email,
            password:hashedPassword,
            dob:dob,
            gender:gender,
            contactNumber:contactNumber,
            address:address,


        });
        console.log(newUser);
        const savedpatient = await newUser.save();
        console.log(savedpatient);
        return NextResponse.json({
            message:"Patient Registered Successfully",
            success:true,
            savedpatient,
        })

    }catch(error){
       
        console.error("Error during patient registration:", error.message || error);
        return NextResponse.json({
            message: "Patient registration failed due to an internal server error",
            success: false,
        }, { status: 500 });

    }
}