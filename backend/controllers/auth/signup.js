const bcrypt=require('bcrypt');
const { User } = require('../../models/users');

async function handleSignUp(req,res){
    const {name, email, password} = req.body;
    // validations

    
    // hash password
    const hashedPassword = bcrypt.hashSync(password, 10);
    // create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });    
    if(user){
        res.status(200).json({message: 'User created successfully', user});
    }
    else{
        res.status(500).json({message: 'Error creating user'});
    }
}

module.exports={
    handleSignUp
}