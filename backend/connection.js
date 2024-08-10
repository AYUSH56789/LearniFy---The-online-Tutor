const mongoose=require('mongoose');

// db connection function
async function dbConnect(url){
    try {
        await mongoose.connect(url);
    } catch (error) {
        console.log(`database connection error ${error}`);
    }
}

module.exports={
dbConnect,
}