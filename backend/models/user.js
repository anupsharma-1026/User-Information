const mongoose = require("mongoose");
// create schema

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobileNo: Number,
    password: String
});

module.exports = mongoose.model("user", userSchema);
