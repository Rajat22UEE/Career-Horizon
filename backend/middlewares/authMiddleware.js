import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import createError from "../utils/errorHandler.js";

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.admin = await Admin.findById(decoded.id).select("-password");

      if (!req.admin) {
        return next(createError(401, "Not authorized, admin not found"));
      }

      next();
    } catch (err) {
      return next(createError(401, "Not authorized, token failed"));
    }
  }

  if (!token) {
    return next(createError(401, "Not authorized, no token"));
  }
};
