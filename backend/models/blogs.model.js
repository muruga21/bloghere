const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    userName : String,
    date : String,
    blogTitle : String,
    blogDescription : String,
    blogContent : String,
    cloudinaryImageId : String,
});

const blogModel = mongoose.model("blogs", blogSchema);