import dotenv from "dotenv";
import mongoose from "mongoose";
import Admin from "../models/Admin.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

async function printAdmins() {
  try {
    await mongoose.connect(MONGO_URI);
    const admins = await Admin.find({});
    console.log("Admins in DB:");
    admins.forEach(admin => {
      console.log({ email: admin.email, passwordHash: admin.password });
    });
    process.exit();
  } catch (err) {
    console.error("❌ Error printing admins:", err.message);
    process.exit(1);
  }
}

printAdmins();
