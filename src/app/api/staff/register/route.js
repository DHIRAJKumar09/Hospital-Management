import { NextResponse } from "next/server";
import { Staff } from "../../../../models/HospitalModels/StaffModel";

export async function POST(req){
    try{
        const body = await req.json();
        const staff = await Staff.find({email});
        if(staff){
            return NextResponse.json({
                message:"staff already registered",
                success:false,
            },{status:404})
        }
        const newStaff = new Staff({
            body
        })
        const saveStaff = await newStaff.save();
        return NextResponse.json({
            message:"staff register successfully",
            success:'true',
            saveStaff,
        },{status:200});

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message:"Internal Server Error ",

        })
    }
}