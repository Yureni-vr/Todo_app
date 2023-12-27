const router = require("express").Router();
const user = require("../models/user");
const list = require("../models/list");


//create post
router.post("/addTask" , async(req,res)=>{
    try{
        const{title,body,email}=req.body;
        const existingUser = await user.findOne({ email });
        const user = new User({email,username,password : hashpassword}); 

        if(!existingUser) {
            const list = new List({email , body, user:existingUser});
            await list.save().then(()=>res.status(200).json({list}));
            existingUser.list.push();
            existingUser.save();
        }
        
        //   await user.save().then(()=>{
        //     res.status(200).json({user:user});
        //   })
    }catch(error){
        console.log(error);
    }
})

//update post

router.put("/UpdateTask:id" , async(req,res)=>{
    try{
        const{title,body,email}=req.body;
        const existingUser = await user.findOne({ email });
        // const user = new User({email,username,password : hashpassword}); 

        if(!existingUser) {
            const list = await list.findByIdAndUpdate(req.params.id,{title,body});
            list.save().then(()=>res.status(200).json({messsage:"Task Updated"}));
        }
        
        //   await user.save().then(()=>{
        //     res.status(200).json({user:user});
        //   })
    }catch(error){
        console.log(error);
    }
});

//delete

router.delete("/DeleteTask:id" , async(req,res)=>{
    try{
        const{email}=req.body;
        const existingUser = await user.findByIdAndUpdate(
            { email },
            { $pull: { list:req.params.id}}
            );
        // const user = new User({email,username,password : hashpassword}); 

        if(!existingUser) {
            const list = await list.findByIdAndDelete(req.params.id).then(()=>
            res.status(200).json({messsage:"Task Deleted"}));
        }
        
        //   await user.save().then(()=>{
        //     res.status(200).json({user:user});
        //   })
    }catch(error){
        console.log(error);
    }
});

//getTask
router.get("/GetTask:id" , async(req,res)=>{
    const list=await list.find({user:req.params.id}).sort({createdAt: -1});
   

    if(list.length !==0){
        res.status(200).json({list:list});
    }else{
        res.status(200).json({message:"No Task"});
    }

})








module.exports = router;

