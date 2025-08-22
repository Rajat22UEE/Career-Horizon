import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    jobTitle: { type: String, required: true },
    location: { type: String, required: true },
    stipend: { type: String },
    requiredSkills: [{ type: String }],
  internshipType: { type: String, enum: ["Remote", "Onsite", "Hybrid"] },
  description: { type: String },
  applyLink: { type: String },
  dateOfPost: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model("Internship", internshipSchema);
