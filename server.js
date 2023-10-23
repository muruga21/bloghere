const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());


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
    console.log(req.body);
    res.status(200);
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
  
