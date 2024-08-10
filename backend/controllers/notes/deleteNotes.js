const { Notes } = require("../../models/notes");

async function handleDeleteNote(req,res){
    try{
        const {note_id}=req.body;
        
        // validation
        
        // find testimonials
        const notes = await Notes.findByIdAndDelete(note_id)
    
        if(!notes){
            return res.status(400).json({message:"Invalid note"})
        }
        else{
            res.status(200).json({message:"note delete successfully",    data:notes})
        }
    }
    catch(error){
        res.status(500).json({message:"Internal server error", error:error})
    }
    
}

module.exports={
    handleDeleteNote
}
