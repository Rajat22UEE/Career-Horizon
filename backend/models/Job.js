import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    jobTitle: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: String },
    requiredSkills: [{ type: String }],
  jobType: { type: String, enum: ["Full-time", "Part-time", "Contract", "Remote", "Hybrid"] },
  description: { type: String },
  applyLink: { type: String },
  dateOfPost: { type: Date, default: Date.now },
  experienceRequired: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
