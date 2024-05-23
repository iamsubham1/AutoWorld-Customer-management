const mongoose = require('mongoose');

// Define enum for roles
const roles = ['worker', 'admin'];

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: roles, // Using enum to restrict values to predefined set

    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
