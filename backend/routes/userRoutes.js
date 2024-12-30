import express from "express";
import { registerUser, loginUser, logoutUser, updateUserProfile, deleteUser, getAllUsers,adminDeleteUser, adminUpdateUser, userProfile, getUserProfile } from "../controllers/userController.js";
import { authorizeAdmin, authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public routes /api/v1/users
router.route("/").post(registerUser).get(authenticate, authorizeAdmin, getAllUsers).delete(authenticate,deleteUser);
router.post('/auth/login', loginUser);
router.post('/auth/logout', logoutUser);

router.route('/profile').get(authenticate, userProfile).put(authenticate, updateUserProfile);

// Admin routes
router.route("/:id").delete(authenticate, authorizeAdmin, adminDeleteUser).put(authenticate, authorizeAdmin, adminUpdateUser).get(authenticate, getUserProfile);

// Helper routes

export default router;