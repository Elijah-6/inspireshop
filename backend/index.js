import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// utils
import connectDB from './config/db.js';


// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/v1/users", userRoutes)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});