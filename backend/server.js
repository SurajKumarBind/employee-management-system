const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');  // MongoDB connection function import

dotenv.config();  // Load environment variables

// Test MongoDB connection
connectDB();  // Call the function to test the MongoDB connection

const app = express();
app.get('/', (req, res) => {
    res.send('Hello, MongoDB is connected!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
