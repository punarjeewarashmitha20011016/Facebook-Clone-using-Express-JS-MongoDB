const express =require("express");
const router = express.Router();
const Post = require("../../models/post.models")

router.get("/",async (req,resp)=>{
    try{
        const post = await Post.find();
        resp.json(post);
    }catch(err){
        resp.json({"message : ":err})
    }
})

router.post("/",async(req,resp)=>{
    try{
        const post = await Post.find();
        resp.json(post);
    }catch(err){
        resp.json({"message : ":err})
    }
})

module.exports = router;