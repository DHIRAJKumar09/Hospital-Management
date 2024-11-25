import { NextResponse } from "next/server";
import { Doctors } from "../../../../models/HospitalModels/DoctorModle";
import bcrypt from 'bcrypt';

export async function POST(req){
   try{
    const body = await req.json();
    const {fullName,email,password, specialization,licenseNumber,contactNumber,branch,experienceYears,address} = body;

    const doctor = await Doctors.findOne({email});
    if(doctor){
        return NextResponse.json({
            message:"Doctory already registered",
            success:false,
        },{status:404})
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    const newDoctor = new Doctors({
        fullName:fullName,
        email:email,
        password:hashedPassword,
        specialization:specialization,
        licenseNumber:licenseNumber,
        contactNumber: contactNumber,
        branch:branch,
        experienceYears: experienceYears,
        address: address,
    })
    const savedDoctor = await newDoctor.save();
    console.log(savedDoctor);

    return NextResponse.json({
        message:"Doctor Registered successfully",
        success:true,
        savedDoctor,
    })
   }catch(error){
     console.log(error);
     return NextResponse.json({
        message:"Intenal server error, ",
        success:false,
     },{status:500});
   }

}