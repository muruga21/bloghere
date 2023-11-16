const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    userName : String,
    date : String,
    blogTitle : String,
    description : String,
    content : String,
    blogImg : String,
});

const blogModel = mongoose.model("blogs", blogSchema);