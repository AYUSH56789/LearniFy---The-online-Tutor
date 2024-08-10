const mongoose=require('mongoose');
const testimonialSchema=new mongoose.Schema({
    testimonial_name:{
        type:String,
        required:true,
        trim:true,
    },
    testimonial_content:{
        type:String,
        required:[true,'Content is Required'],
        trim:true,
        maxlength:500,
    },
    testimonial_img:{
        type:String,
        required:true,
    }
},{timestamps:true})

const Testimonial=mongoose.model('Testimonial',testimonialSchema);
module.exports={
    Testimonial,
}
