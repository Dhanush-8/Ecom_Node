//step 2 
//This is our model for user file 
const mongoose = require("mongoose");

//THis is configurtion file which creates schema for user
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

//now expor tthus model 
module.exports = mongoose.model("users", userSchema);