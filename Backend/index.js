import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 4000;

// Middleware setup
app.use(cors({
    origin: 'http://127.0.0.1:5500', // Ensure frontend is running on this address
    methods: ['GET', 'POST'], // Allow only necessary methods
}));
app.use(express.json());

// Simple root route for testing
app.get('/', (req, res) => {
    res.send('API is working!');
});

// Use the routes for user and contact form submissions
app.use('/api/user', userRoutes);

// MongoDB connection
const dbURI = process.env.DB_URI;

const connectDB = async () => {
    if (!dbURI) {
        console.error('MongoDB URI is not defined in the .env file');
        process.exit(1); // Exit if no DB URI is provided
    }

    try {
        await mongoose.connect(dbURI); // No options needed for Mongoose 6+
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit the app if connection fails
    }
};

connectDB();

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
