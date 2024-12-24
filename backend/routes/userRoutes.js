import express from "express";
import { registerUser, loginUser, logoutUser, updateUserProfile, deleteUser } from "../controllers/userController.js";
import { authorizeAdmin, authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.route("/").post(registerUser).get(authenticate, authorizeAdmin, getAllUsers);
router.post("/register", registerUser);
router.post('/auth/login', loginUser);
router.post('/auth/logout', logoutUser);

// Protected routes

router.route("/:id").get(authenticate, getUser);
router.put("/:id", authenticate, updateUserProfile);
router.delete("/:id", authenticate, authorizeAdmin, deleteUser);

// Admin routes
router.delete("/admin/:id", authenticate, authorizeAdmin, deleteUser);

// Helper routes

export default router;