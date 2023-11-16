const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    userName : {type: String},
    date : {type: String},
    blogTitle : {type: String},
    description : {type: String},
    content : {type: String},
    blogImg : {type: String}
});

const blogModel = mongoose.model("blogs", blogSchema);

module.exports = blogModel;