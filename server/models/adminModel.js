const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
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

});


const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
