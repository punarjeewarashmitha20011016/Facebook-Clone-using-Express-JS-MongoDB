const express = require("express");
const router = express.Router();
const Item = require("../../models/users.models")

router.get("/",async(req,resp)=>{
    try{
        const item = await Item.find();
        item.forEach(element => {
            let password = Buffer.from(element.password, 'base64').toString('ascii');  
            element.password = password;
        });
        resp.json(item);
    }catch(err){
        resp.json({"message : ":err});
    }
})

router.post("/",async(req,resp)=>{
    const item = new Item(req.body);
    try{
        let password = item.password;
        let buff = new Buffer(password);
        let base64Data = buff.toString('base64');
        item.password = base64Data;
       const response = await item.save();
       resp.json(response);
    }catch(err){
        resp.json({"message : ":err})
    }
})

module.exports = router;