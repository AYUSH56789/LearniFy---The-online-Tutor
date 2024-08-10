const { Notes } = require("../../models/notes");

async function handleAddNote(req,res){
    try{
        const {note_title,note_tag}=req.body;
        
        // validation
        
        // create testimonials
        const note = await Notes.create({
            note_title,
            note_tag,
            note_link:"note url"
        })
    
        if(!note){
            return res.status(400).json({message:"Failed to add note"})
        }
        else{
            res.status(200).json({message:"note added successfully",    data:note})
        }
    }
    catch(error){
        res.status(500).json({message:"Internal server error", error:error})
    }
    
}

module.exports={
    handleAddNote
}
