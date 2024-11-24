import { Branch } from "../../../models/HospitalModels/BranchModle";

export async function POST(req,res){
    try{
        const body = await req.json();
        const newBranch = new Branch({body});
        const savbebrnach = await newBranch.save();
        return NextResponse.json({
            message:"branch created",
            success:true,
        })

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message:"Internal server Error",
            success:false,
        },{status:500});
    }
}