const blogModel = require("../models/blogs.model");

exports.create = (req,res) => {
    const {
        userName, 
        date, 
        blogTitle, 
        blogDescription, 
        blogContent, 
        cloudinaryImageId
    } = req.body; 
    
    const newBlog = new blogModel({
        userName, 
        date, 
        blogTitle, 
        blogDescription, 
        blogContent, 
        cloudinaryImageId
    });
    
    newBlog.save().then((data) => {
        if(!data){
            res.status(400).json({message:"Something went wrong while saving new blog"});
        }
        res.send(data);
    }).catch(err=>{
        res.status(500).json({message:"server not available"});
    })
};
