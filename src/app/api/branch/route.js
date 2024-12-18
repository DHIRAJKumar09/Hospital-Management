import { Branch } from "../../../models/HospitalModels/BranchModle";

export async function POST(req){
    try{
        const body = await req.json();
        const newBranch = new Branch({body});
        const savebranch = await newBranch.save();
        return NextResponse.json({
            message:"branch created",
            success:true,
            savebranch,
        })

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message:"Internal server Error",
            success:false,
        },{status:500});
    }
}