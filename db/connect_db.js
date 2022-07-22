const mongoose = require('mongoose');
const database = "mongodb+srv://iamak02:abhay@cluster0.ddzthbh.mongodb.net/admission?retryWrites=true&w=majority"
const connectDB = () => {
    // return mongoose.connect("mongodb://localhost:27017/admission-portal")
    return mongoose.connect(database)
        .then(() => {
            console.log("Connet Database...")
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports = connectDB
