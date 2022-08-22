const express = require("express");
const router = express.Router();
const User = require("../../models/users.models")

router.get("/",async(req,resp)=>{
    try{
        const user = await User.find();
        user.forEach(element => {
            let password = Buffer.from(element.password, 'base64').toString('ascii');  
            element.password = password;
        });
        resp.json(user);
    }catch(err){
        resp.json({"message : ":err});
    }
})

router.get("/login/:email/:password",async(req,resp)=>{
    try{
        const email = req.params.email;
        const password = req.params.password;
        const user =await User.find();
        user.forEach(async element => {
            console.log("hi");
            if(((element.email === email) & (Buffer.from(element.password, 'base64').toString('ascii') === password))){
                const userLogin =await User.findById(element.id);
                userLogin.password = Buffer.from(element.password,'base64').toString('ascii');
                resp.json(userLogin);
            }
        });
    }catch(err){
        resp.json({"message : ":err})
    }
})

router.post("/",async(req,resp)=>{
    const user = new User(req.body);
    try{
        let password = user.password;
        let buff = new Buffer(password);
        let base64Data = buff.toString('base64');
        user.password = base64Data;
        user.phoneNumber = 0+user.phoneNumber;
       const response = await user.save();
       resp.json(response);
    }catch(err){
        resp.json({"message : ":err})
    }
})

router.put("/:id",async(req,resp)=>{
    try{
        const user = await User.findById(req.params.id);
        user.firstName = req.body.firstName;
        user.surName = req.body.surName;
        user.gender = req.body.gender;
        user.dateOfBirth = req.body.dateOfBirth;
        user.password = Buffer.from(req.body.password,'base64');
        user.phoneNumber = req.body.phoneNumber;
        user.email = req.body.email;

        const update = await user.save(user);
        resp.json(update);
    }catch(err){
        resp.json({"message : ":err})
    }
});

router.delete("/:id",(req,resp)=>{
    try{
        const user = User.findById(req.params.id);
        const response = user.remove();
        resp.json(response);
    }catch(err){
        resp.json({"message : ":err})
    }
})

module.exports = router;