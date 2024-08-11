const { Notes } = require("../../models/notes");

async function handleUpdateNote(req,res){
    try{
        const {note_id,note_title,note_tag,note_link}=req.body;
        
        // validation
        
        const note = await Notes.findByIdAndUpdate(note_id,{note_title,note_tag},{new:true})
        if(!note){
            return res.status(404).json({message: "Note not found"})
        }
        else{
            return res.status(200).json({message: "Note update successfully", note})
        }
    }
    catch(error){
        res.status(500).json({message:"Internal server error", error:error})
    }
    
}

module.exports={
    handleUpdateNote
}
