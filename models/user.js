const mongoose = require('mongoose');

// define schema
const UserSchema = new mongoose.Schema({
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
    password: {
        type: String,
        require: true,
        trim: true
    }
}, { timestamps: true })

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;