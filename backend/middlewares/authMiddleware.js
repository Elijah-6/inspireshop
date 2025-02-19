import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "./asyncHandler.js";


// Middleware to verify JWT

const authenticate = asyncHandler (async(req, res, next) => {
  let token;
  
  token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: "You are not authorized to access this route" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is invalid" });
  }
});

const authorizeAdmin = asyncHandler(async (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(403).json({ message: "You are not authorized to perform this action" });
    }
});

export {authorizeAdmin, authenticate};
