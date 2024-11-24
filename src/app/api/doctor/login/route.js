import { Doctors } from "@/models/HospitalModels/DoctorModle";
import { NextResponse } from "next/server";
export async function POST(req,res){
    try{

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message:""
        })
    }

}