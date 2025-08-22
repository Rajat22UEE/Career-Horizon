import mongoose from "mongoose";

const hrSchema = new mongoose.Schema(
  {
    hrName: { type: String, required: true },
    companyName: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("HRContact", hrSchema);
