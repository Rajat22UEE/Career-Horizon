import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js"; // ✅ fixed import

// 🔑 Generate Token
const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });

// ➕ Register Admin
export const registerAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const existing = await Admin.findOne({ email });
    if (existing) return next(createError(400, "Admin already exists"));

    const admin = new Admin({ email, password });
    await admin.save();

    res.status(201).json({
      success: true,
      message: "Admin created successfully",
      email: admin.email,
    });
  } catch (err) {
    next(err);
  }
};

// 🔓 Login Admin
export const loginAdmin = async (req, res, next) => {
  try {
    console.log("Login request body:", req.body);
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin || !(await admin.matchPassword(password))) {
      console.log("Login failed for email:", email);
      return next(createError(401, "Invalid email or password"));
    }

    const token = generateToken(admin._id);
    res.json({
      success: true,
      message: "Login successful",
      token,
      email: admin.email,
    });
  } catch (err) {
    next(err);
  }
};

// 📂 Get All Admins
export const getAdmins = async (req, res, next) => {
  try {
    const admins = await Admin.find().select("-password");
    res.json({ success: true, admins });
  } catch (err) {
    next(err);
  }
};

// ❌ Delete Admin
export const deleteAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) return next(createError(404, "Admin not found"));

    res.json({ success: true, message: "Admin deleted" });
  } catch (err) {
    next(err);
  }
};
