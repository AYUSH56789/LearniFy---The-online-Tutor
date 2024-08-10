const { Notes } = require("../../models/notes")

async function handleGetNotes(req,res){
    try{
               
        // find all testimonials
        const notes = await Notes.find({})
        res.status(200).json({message:"notes fetch successfully",    data:notes})
    }
    catch(error){
        res.status(500).json({message:"Internal server error", error:error})
    }
    
}


module.exports={
    handleGetNotes,
}
