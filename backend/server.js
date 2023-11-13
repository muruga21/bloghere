const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const user = require("./models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")

const salt = bcrypt.genSaltSync(10);
const secret = "asdfghjkl";

const app = express();
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(cookieParser());

const datas = require("../src/components/datas.json");
const {users} = require("../src/components/userdatas.json");

app.listen("5000",()=>{
    console.log("listening on 5000");
})

mongoose.connect("mongodb+srv://muruga:murugaperumal@cluster0.liatxyy.mongodb.net/");

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

app.get("/blogs",(req,res)=>{
    console.log("request for blogs");
    res.json(datas);
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
            throw err;
        }
        else{
            res.json(info.userName);
        }
    })
});

app.post("/logout",(req,res)=>{
    const {token} = req.cookies;
    res.cookie(token,'').json('ok'); 
})

app.post("/addblog",(req,res)=>{
    
    const { id, userName, blogTitle, imgUrl, content, description } = req.body;

    const data = {
        "id":id,
        "userName":userName,
        "blogTitle":blogTitle,
        "imgUrl":imgUrl,
        "content":content,
        "description":description
    }

    datas.push(data);
    console.log(datas);
    res.sendStatus(200);
})

app.get("/blog/:blogid", (req, res) => {
    const {blogid} = req.params;
    const blog = datas.find(datas => datas.blogid == blogid);
    if(!blog){
        console.log("Empty");
        res.status(404).send('blog not found');
    }
    res.json(blog);
  });
  
