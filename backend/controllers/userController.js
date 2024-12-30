import asyncHandler from '../middlewares/asyncHandler.js';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';

// Register user
// POST /api/users
// Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password, isAdmin } = req.body;

    if (!username || !email || !password) {
        res.status(400);
        throw new Error('Please fill in all fields');
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const user = await User.create({ username, email, password: hashedPassword });
        generateToken(res, user._id);
        res.status(201).json({ user });
    } catch (error) {
        res.status(400);
        throw new Error('Invalid user data');
    }

});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    if (!email ||!password) {
        res.status(400);
        throw new Error('Please provide email and password');
    }

    const user = await User.findOne({ email });
    if (!user) {
        res.status(401);
        throw new Error('Invalid email or password');
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        res.status(401);
        throw new Error('Invalid email or password');
    }
    
    generateToken(res, user._id);
    res.json({ user });
});

const logoutUser = asyncHandler(async (req, res) => {
    res.clearCookie('jwt');
    res.json({ message: 'User logged out' });
});

const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Cannot get users" });
}
});

const userProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    res.json(user);
});

const updateUserProfile = asyncHandler(async (req, res) => {
    const { username, email } = req.body;
    let password = req.body.password;
    if (password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        password = hashedPassword;
    }
    const user = await User.findByIdAndUpdate(req.user._id, { username, email, password }, { new: true });

    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    
    res.json(user);
});

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findByIdAndDelete(req.user._id);
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    
    res.json({ message: "User deleted" });
});

const adminUpdateUser = asyncHandler(async (req, res) => {
    const { username, email, isAdmin } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { username, email, isAdmin }, { new: true });
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    
    res.json(user.isAdmin);
});

const adminDeleteUser = asyncHandler(async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    
    res.json({ message: "User deleted" });
});

export { registerUser, loginUser, logoutUser, getAllUsers, userProfile, updateUserProfile, deleteUser, adminDeleteUser, adminUpdateUser };