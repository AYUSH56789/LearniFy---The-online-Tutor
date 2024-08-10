const bcrypt=require('bcrypt');
const { User } = require('../../models/users');

async function handlelogin(req,res){
    // extract data from body
    const {email,password}=req.body;

    // validation

    // find user in db using email
    const user=await User.findOne({email});

    if(!user){
        return res.status(400).json({message:'Invalid email or password'});
    }
    else{
        // compare password using bcrypt
        const isValidPassword=await bcrypt.compare(password,user.password);
        if(!isValidPassword){
            return res.status(400).json({message:'Invalid email or password'});
        }
        else{
            return res.status(200).json({message:`welcome ${user.name}`,data:user});
        }
    }

}

module.exports={
    handlelogin,
}