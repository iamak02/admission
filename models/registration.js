const mongoose = require('mongoose');

// define schema
const RegistrationSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    phone: {
        type: String,
        require: true,
        trim: true
    },
    course: {
        type: String,
        require: true,
        trim: true
    },
    address: {
        type: String,
        require: true,
        trim: true
    },
    image: {
        type: String,
        require: true,
        trim: true
    }
}, { timestamps: true })

const RegistrationModel = mongoose.model('registration', RegistrationSchema);
module.exports = RegistrationModel;