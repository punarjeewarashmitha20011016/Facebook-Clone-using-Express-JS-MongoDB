const mongoose = require("mongoose");

const user = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    surName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("User",user);