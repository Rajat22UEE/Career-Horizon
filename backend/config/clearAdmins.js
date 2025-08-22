import dotenv from "dotenv";
import mongoose from "mongoose";
import Admin from "../models/Admin.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

async function clearAdmins() {
  try {
    await mongoose.connect(MONGO_URI);
    const result = await Admin.deleteMany({});
    console.log(`✅ Deleted ${result.deletedCount} admin(s)`);
    process.exit();
  } catch (err) {
    console.error("❌ Error deleting admins:", err.message);
    process.exit(1);
  }
}

clearAdmins();
