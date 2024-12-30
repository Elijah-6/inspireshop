import express from "express";
import { registerUser, loginUser, logoutUser, updateUserProfile, deleteUser, getAllUsers,adminDeleteUser, adminUpdateUser } from "../controllers/userController.js";
import { authorizeAdmin, authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public routes /api/v1/users
router.route("/").post(registerUser).get(authenticate, authorizeAdmin, getAllUsers).delete(authenticate,deleteUser);
router.post('/auth/login', loginUser);
router.post('/auth/logout', logoutUser);

// Protected routes
router.put("/", authenticate, updateUserProfile);

// Admin routes
router.delete("/:id", authenticate, authorizeAdmin, adminDeleteUser).put("/:id", authenticate, authorizeAdmin, adminUpdateUser);

// Helper routes

export default router;