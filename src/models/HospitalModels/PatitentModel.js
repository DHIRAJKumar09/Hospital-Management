import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
    fullName:{type:String,required:true},
    email:{type:String,required:true,unique:true,},
    password: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    contactNumber: { type: String, required: true },
    address: { type: String },
    allergies: { type: [String], default: [] },
    conditions: { type: [String], default: [] },
    emergencyContact: {
      name: { type: String },
      contactNumber: { type: String },
    },
    appointments: [
      {
        doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
        date: { type: Date },
        status: { type: String, enum: ["Scheduled", "Completed", "Cancelled"] },
      },
    ],
  },
  { timestamps: true }
);
export const Patient = mongoose.models.Patient || mongoose.model("Patient", PatientSchema);