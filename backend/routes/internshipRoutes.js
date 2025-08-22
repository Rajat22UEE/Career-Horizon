import express from "express";
import {
  createInternship,
  getInternships,
  getInternshipById,
  updateInternship,
  deleteInternship,
} from "../controllers/internshipController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createInternship);
router.get("/", getInternships);
router.get("/:id", getInternshipById);
router.put("/:id", protect, updateInternship);
router.delete("/:id", protect, deleteInternship);

export default router;
