import mongoose from 'mongoose';
const StaffSchema = new mongoose.Schema(
    {
      fullName: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: { type: String, enum: ["Nurse", "Receptionist", "Lab Technician", "Other"], required: true },
      branch: { type: mongoose.Schema.Types.ObjectId, ref: "Branch" },
      contactNumber: { type: String, required: true },
      address:{type:String},
      isActive: { type: Boolean, default:false },
    },
    { timestamps: true }
  );
  
  export const Staff =mongoose.models.Staff || mongoose.model("Staff", StaffSchema);