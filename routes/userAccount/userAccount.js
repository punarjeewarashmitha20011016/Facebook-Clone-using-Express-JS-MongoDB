const express = require("express");
const router = express.Router();
const Item = require("../../models/users.models")

router.get("/",async(req,resp)=>{
    try{
        const item = await Item.find();
        resp.json(item);
    }catch(err){
        resp.json({"message : ":err});
    }
})

router.post("/",async(req,resp)=>{
    const item = new Item(req.body);
    try{
       const response = await item.save();
       resp.json(response);
    }catch(err){
        resp.json({"message : ":err})
    }
})

module.exports = router;