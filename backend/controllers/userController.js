import asyncHandler from '../middlewares/asyncHandler.js';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';

// Register user
// POST /api/users
// Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, isAdmin } = req.body;

    if (!name || !email || !password) {
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
        const user = await User.create({ name, email, password: hashedPassword });
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


export { registerUser, loginUser };