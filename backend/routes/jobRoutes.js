import express from "express";
import {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createJob);
router.get("/", getJobs);
router.get("/:id", getJobById);
router.put("/:id", protect, updateJob);
router.delete("/:id", protect, deleteJob);

export default router;
