const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000;
app.use(express.json());
const userAccount = require("./routes/userAccount/userAccount")
const posts = require("./routes/posts/posts")

const url = "mongodb://127.0.0.1/facebookCloneDb";
mongoose.connect(url,{useNewUrlParser:true});
const con = mongoose.connection;

con.on("open",()=>{
    console.log("MongoDB Connected");
})

app.use("/users",userAccount);
app.use("/posts",posts);

app.listen(port,()=>{
    console.log("App is Running");
})