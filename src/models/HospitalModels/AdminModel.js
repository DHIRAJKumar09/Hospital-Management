const AdminSchema = new mongoose.Schema(
    {
      fullName: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: { type: String, enum: ["Super Admin", "Branch Admin"], default: "Branch Admin" },
      branch: { type: mongoose.Schema.Types.ObjectId, ref: "Branch" }, // For branch admins
      contactNumber: { type: String },
    },
    { timestamps: true }
  );
  
  export const Admin = mongoose.model("Admin", AdminSchema);
  