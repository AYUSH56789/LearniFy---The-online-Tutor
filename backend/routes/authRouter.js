const express=require("express");
const { handleSignUp } = require("../controllers/auth/signup");
const { handlelogin } = require("../controllers/auth/login");
const authRouter=express.Router();

authRouter.post('/login',handlelogin)


authRouter.post('/signup',handleSignUp)


authRouter.get('/forgetPasswordd',(req,res)=>{
    
})

module.exports={
    authRouter,
}
