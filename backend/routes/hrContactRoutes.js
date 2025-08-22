import express from "express";
import {
  createHRContact,
  getHRContacts,
  getHRContactById,
  updateHRContact,
  deleteHRContact,
} from "../controllers/hrController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createHRContact);
router.get("/", getHRContacts);
router.get("/:id", getHRContactById);
router.put("/:id", protect, updateHRContact);
router.delete("/:id", protect, deleteHRContact);

export default router;
