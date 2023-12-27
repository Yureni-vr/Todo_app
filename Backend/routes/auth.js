const router = require("express").Router();
const user = require("../models/user");



router.post("/register" , async(req,res)=>{
    try{
        const{email,username,password}=req.body;
        const hashpassword =bcrypt.hashSync(password);
        const user = new User({email,username,password : hashpassword}); 
        
          await user.save().then(()=>{
            res.status(200).json({user:user});
          })
    }catch(error){
        res.status(400).json({message:"User already Exists"});
    }
})

//SIGN IN

router.post("/signin" , async(req,res)=>{
    try{
        const user = await user.findOne({email:req.body.email});
        if(!user){
            res.status(400).json({message:"Please Signup first"});
        }

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);

        if(!isPasswordCorrect){
            res.status(400).json({message:"Password is incorrect"});
        }

        const{password,...others}=user._doc;
        res.status(200).json({others})
        
          
    }catch(error){
        res.status(400).json({message:"User already Exists"});
    }
})

module.exports = router;

