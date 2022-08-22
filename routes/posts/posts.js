const e = require("express");
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

router.get("/:id",async (req,resp)=>{
    try{
        const post = await Post.findById(req.params.id);
        resp.json(post);
    }catch(err){
        resp.json({"message : ":err})
    }
})

router.get("/getPostFromUserId/:userId",async (req,resp)=>{
    try{
        const posts = await Post.find();
        let userPosts = undefined;
        posts.forEach(async element => {
            console.log("sdvsdvs");
            if(req.params.userId == element.userId){
                userPosts = element;
            }
        });
        resp.json(userPosts);
    }catch(err){
        resp.json({"message : ":err})
    }
})


router.post("/",async(req,resp)=>{
    try{
        const post = new Post(req.body);
        const response = await post.save();
        resp.json(response);
    }catch(err){
        resp.json({"message : ":err})
    }
})

router.put("/:id",async(req,resp)=>{
    try{
        const post = await Post.findById(req.params.id);
        post.userId = req.body.userId;
        post.date = req.body.date;
        post.time = req.body.time;
        post.title = req.body.title;
        post.body = req.body.body;
        const response = await post.save();
        resp.json(response);
    }catch(err){
        resp.json({"message : ":err})
    }
})

router.delete("/:id",async(req,resp)=>{
    try{
        const post = await Post.findById(req.params.id);
        const response = await post.remove()
        resp.json(response);
    }catch(err){
        resp.json(err);
    }
})

module.exports = router;