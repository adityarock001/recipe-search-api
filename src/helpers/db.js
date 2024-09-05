const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB connected successfully");
}).catch((err) => {
    console.log("Error connecting to MongoDB: ", err.message);
});