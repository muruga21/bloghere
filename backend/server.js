const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const user = require("./models/user.model");
const blogModel = require("./models/blogs.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer  = require('multer')
const fs = require('fs');

const uploadBlogImg = multer({ dest: 'uploads/' })

const salt = bcrypt.genSaltSync(10);
const secret = "asdfghjkl";

const app = express();
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname+'/uploads'));

const datas = require("../src/components/datas.json");
const {users} = require("../src/components/userdatas.json");

app.listen("5000",()=>{
    console.log("listening on 5000");
})

mongoose.connect("mongodb+srv://kishore:kishore@mern.d6qyuyj.mongodb.net/BlogHereDb?retryWrites=true&w=majority&appName=Mern");

const db = mongoose.connection;
db.on("error", ()=>{
    console.log("Connectin was not success");
})

db.on("open",()=>{
    console.log("connection is successfull");
})

app.get("/",(req,res)=>{
    res.send("done")
})

app.get("/blogs/:val", async(req,res)=>{
    const blogDocs = await blogModel.find();
    const val = req.params.val
    console.log("value"+ val)
    console.log("blogsd:"+val);
    if(val !="NULL" && val!=""){
        console.log("testTTTT");
        temp =[]
        for(var i=0;i<blogDocs.length;i++){
            var title = blogDocs[i].blogTitle.toLowerCase();
            var value = val.toLowerCase();
          if(title.indexOf(value) !==-1){
              console.log("title"+blogDocs[i].blogTitle)
              temp.push(blogDocs[i]);
          }
        }
        console.log("temp" + temp)
        res.json(temp);
    }
    else{
        console.log("request for blogs" + blogDocs.toString());
        res.json(blogDocs);
    }
 
})

app.post("/register", async(req,res)=>{
    const {userName, password} = req.body;
    try{
        const userDoc = await user.create({userName, password:bcrypt.hashSync(password,salt)});
        res.status(200).json(userDoc);
    } catch(e){
        res.status(400).json(e);
    }
});

app.post("/login", async(req,res)=>{
    const {userName, password} = req.body;
    const userDoc = await user.findOne({userName:userName});
    if(!userDoc){
        res.status(400).json("invalid userName");
    }
    else{
        const passOk = bcrypt.compareSync(password,userDoc.password);
        if(passOk){
            jwt.sign({userName,id:userDoc._id}, secret, {} ,(err,token)=>{
                if(err){
                    throw err;
                }
                res.cookie("token",token).json('ok');
            })
        }
        else{
            res.status(400).json('wrong credentials');
        }
    }
})

app.get("/profile",(req,res)=>{
    const {token} = req.cookies;
    jwt.verify(token,secret,{},(err,info)=>{
        if(err){
            res.status(500).json("no user found");
        }
        else{
            res.json(info.userName);
        }
    })
});

app.post("/logout",(req,res)=>{
    res.cookie('token','').json('ok'); 
})

app.post("/addblog",uploadBlogImg.single('blogImg'), async(req,res)=>{
    const {originalname,path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length -1];
    const newPath = path+'.'+ext;
    fs.renameSync(path, newPath);
    
    const {userName, blogTitle, description, content} = req.body;
    const date = new Date().toDateString();
    const blogImg = newPath;

    try{
       const userDoc = await blogModel.create({userName, date, blogTitle, description, content, blogImg});
       res.json(userDoc).status(200);
    }catch(e){
        throw e;
    }

})

app.get("/blog/:blogid",async(req, res) => {
    const {blogid} = req.params;
    const blogDoc = await blogModel.findOne({_id:blogid});
    res.json(blogDoc);
  });

app.put("/edit/:blogid",uploadBlogImg.single('blogImg'),async(req,res)=>{
    try{
        const {originalname,path} = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length -1];
        const newPath = path+'.'+ext;
        fs.renameSync(path, newPath);

        const {blogid} = req.params;
        const {userName, blogTitle, description, content} = req.body;
        const date = new Date().toDateString();
        const blogImg = newPath;

        try{
            const userDoc = await blogModel.updateOne({_id:blogid},{$set:{userName, date, blogTitle, description, content, blogImg}});
            res.json(userDoc);
        }catch(e){
            throw e;
        }
    } catch(e){
        res.status(500).send({message:"unknown error"});
    }
})

app.delete('/deleteBlog/:blogid',async (req,res)=>{
    try{
        const {blogid} = req.params;
        const data =await blogModel.findOne({_id:blogid})
        if(data){
        const userDoc = await blogModel.deleteOne({_id:blogid});
        res.json(userDoc);}
        else{
            res.status(400).send({message:"blog not found"});
        }
    }
    catch(e){
        res.status(500).send({message:e});
    }


})
