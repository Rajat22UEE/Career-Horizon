// backend/utils/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error("❌ Error:", err.stack || err);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export default errorHandler;
