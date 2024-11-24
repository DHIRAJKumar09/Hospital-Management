import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    specialization: { type: String, required: true },
    licenseNumber: { type: String, required: true, unique: true },
    contactNumber: { type: String, required: true },
    branch: { type: mongoose.Schema.Types.ObjectId, ref: "Branch" }, // Reference to Branch
    experienceYears: { type: Number, default: 0 },
    address:{type:String},
    bio: { type: String },
    schedule: [
        {
          day: { type: String, enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] },
          startTime: { type: String },
          endTime: { type: String },
        },
      ],
      appointments: [
        {
          patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
          date: { type: Date },
          status: { type: String, enum: ["Scheduled", "Completed", "Cancelled"] },
        },
      ],
      isActive: { type: Boolean, default: false },
    },
   
    { timestamps: true }
)

export const Doctors = mongoose.models.Doctor || mongoose.model("Doctor",DoctorSchema);

 