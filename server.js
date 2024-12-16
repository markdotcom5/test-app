const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase')
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch((err) => console.error('❌ MongoDB connection error:', err.message));

// User Model (Inline for simplicity)
const UserSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Name is required'] },
    email: { type: String, required: [true, 'Email is required'] },
});

const User = mongoose.model('User', UserSchema);

// Test Route
app.get('/', (req, res) => {
    res.send('✅ Server is running!');
});

// GET Route: Fetch all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: '❌ Failed to fetch users', error: error.message });
    }
});

// POST Route: Create a new user with validation
app.post('/api/users', async (req, res) => {
    const { name, email } = req.body;

    // Check if required fields are present
    if (!name || !email) {
        return res.status(400).json({
            message: '❌ Missing required fields: name and email are required',
        });
    }

    try {
        const newUser = new User({ name, email });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({
            message: '❌ Failed to create user',
            error: error.message,
        });
    }
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
}).on('error', (err) => {
    console.error('❌ Error starting server:', err.message);
});

