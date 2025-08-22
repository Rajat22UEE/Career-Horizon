import Job from "../models/Job.js";
import createError from "../utils/errorHandler.js";

// ➕ Add Job
export const createJob = async (req, res, next) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    next(err);
  }
};

// 📂 Get All Jobs
export const getJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    next(err);
  }
};

// 📂 Get One Job
export const getJobById = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return next(createError(404, "Job not found"));
    res.json(job);
  } catch (err) {
    next(err);
  }
};

// ✏️ Update Job
export const updateJob = async (req, res, next) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!job) return next(createError(404, "Job not found"));
    res.json(job);
  } catch (err) {
    next(err);
  }
};

// ❌ Delete Job
export const deleteJob = async (req, res, next) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return next(createError(404, "Job not found"));
    res.json({ message: "Job deleted" });
  } catch (err) {
    next(err);
  }
};
