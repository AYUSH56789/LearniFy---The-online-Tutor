const mongoose=require('mongoose');
const noteSchema=new mongoose.Schema({
    note_title:{
        type:String,
        // required:[true,'note title is Required'],
        trim:true,
    },
    note_tag:{
        type:String,
        required:[true,'tags is Required'],
        trim:true,
        maxlength:50,
    },
    note_link:{
        type:String,
        required:[true,'note link is Required'],  
    }
},{timestamps:true})

const Notes=mongoose.model('Notes',noteSchema);
module.exports={
    Notes,
}
