const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

mongoose.model("users", userSchema); //it will create a new collection of users if there are not any existing previously