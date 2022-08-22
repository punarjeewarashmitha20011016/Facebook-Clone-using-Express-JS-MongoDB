const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000;
app.use(express.json());
const userAccount = require("./routes/userAccount/userAccount")

app.use("/users",userAccount);

app.listen(port,()=>{
    console.log("App is Running");
})