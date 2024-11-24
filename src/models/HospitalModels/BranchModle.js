import mongoose from 'mongoose';
const BranchSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      address: { type: String, required: true },
      contactNumber: { type: String },
      email: { type: String },
      doctors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }],
      staff: [{ type: mongoose.Schema.Types.ObjectId, ref: "Staff" }],
    },
    { timestamps: true }
  );
  
  export const Branch = mongoose.model("Branch", BranchSchema);
  