import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import errorHandler from "./utils/errorHandler.js";

// Routes
import adminRoutes from "./routes/adminRoutes.js";
import hrRoutes from "./routes/hrContactRoutes.js";
import internshipRoutes from "./routes/internshipRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/admins", adminRoutes);
app.use("/api/hrs", hrRoutes);
app.use("/api/internships", internshipRoutes);
app.use("/api/jobs", jobRoutes);

// Error Middleware (should be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
