// let projects = []; // temporary in-memory DB
// In a real application, this would be replaced with a database connection
//SO for now its stored in Node.js memeory 

const mongoose = require("mongoose");
//This line makes sure that post api data is getting stored in the DB 

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
},{ timestamps: true });

module.exports = mongoose.model("Project", projectSchema);