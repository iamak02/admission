const mongoose = require('mongoose');
const connectDB = () => {
    return mongoose.connect("mongodb://localhost:27017/admission-portal")
        .then(() => {
            console.log("Connet Database...")
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports = connectDB
