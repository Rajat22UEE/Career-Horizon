import express from "express";
import {
  registerAdmin,
  loginAdmin,
  getAdmins,
  deleteAdmin,
} from "../controllers/adminController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/", protect, getAdmins);
router.delete("/:id", protect, deleteAdmin);

export default router;
