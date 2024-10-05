// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.error('MongoDB connection error:', err));


// Sample Route
app.get('/', (req, res) => {
    res.json({
        message: 'API is running...',
        mongoStatus: 'MongoDB connected!', // Change this based on actual connection status
        environment: process.env.NODE_ENV || 'development',
        frontendURL: `http://localhost:${PORT + 1}`, // Adjust if your frontend is on a different port
    });
});

// Function to Start Server
const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
        console.log(`Frontend is running on http://localhost:${PORT + 1}`); // Adjust if your frontend is on a different port
        console.log('========================');
        console.log('All services are up and running!');
        console.log('========================');
    });
};

startServer();
