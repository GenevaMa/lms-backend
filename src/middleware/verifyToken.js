import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";

export const verifyToken = async (req, res, next) => {
  try {
    const secretKey = process.env.JWT_SECRET_KEY ?? "";
    if (!secretKey) {
      return res.status(500).json({ message: "JWT secret not configured" });
    }

    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader || typeof authHeader !== "string") {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    // support "Bearer <token>", "JWT <token>" or raw token
    const parts = authHeader.split(" ");
    const token = parts.length === 2 ? parts[1] : authHeader;

    if (!token || token === "null" || token === "undefined") {
      return res.status(401).json({ message: "Token not provided" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, secretKey);
    } catch (err) {
      return res.status(401).json({ message: "Invalid token", error: err.message });
    }

    const user = await userModel.findById(decoded.id, "_id name email role");
    if (!user) {
      return res.status(401).json({ message: "Token expired or user not found" });
    }

    req.user = {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role
    };

    next();
  } catch (err) {
    return res.status(500).json({ message: "Server error in verifyToken", error: err.message });
  }
};
