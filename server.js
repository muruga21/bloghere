const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const datas = require("./src/components/datas.json");
const {users} = require("./src/components/userdatas.json");

app.listen("5000",()=>{
    console.log("listening on 5000");
})

app.get("/",(req,res)=>{
    res.send("done")
})

app.get("/blogs",(req,res)=>{
    console.log("request for blogs");
    res.json(datas);
})

app.post("/register",(req,res)=>{
    console.log("got a request for register");
    res.json("got a request");
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
  
