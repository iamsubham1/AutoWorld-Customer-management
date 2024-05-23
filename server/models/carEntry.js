const mongoose = require('mongoose');


const carEntrySchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    },

    phoneNumber: {
        type: Number,
        required: true,
    },
    carBrand: {
        type: String,
        required: true,
    },
    carModel: {
        type: String,
        required: true,
    },
    regdNo: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
    kms: {
        type: Number
    }

});


const CarEntry = mongoose.model('CarEntry', carEntrySchema);
module.exports = CarEntry;
