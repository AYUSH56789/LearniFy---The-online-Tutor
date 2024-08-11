const { Testimonial } = require("../../models/testimonials");

async function handleUpdateTestimonial(req,res){
    try{
        const {testimonial_id,testimonial_name,testimonial_content}=req.body;
        // find all testimonials
        const testimonials = await Testimonial.findByIdAndUpdate(testimonial_id,{testimonial_name,testimonial_content},{new:true})
        if(!testimonials){
            return res.status(404).json({message: "Testimonial not found"})
        }
        else{
            return res.status(200).json({message: "Testimonial update successfully", testimonials})
        }
    }
    catch(error){
        res.status(500).json({message:"Internal server error", error:error})
    }
    
}


module.exports={
    handleUpdateTestimonial,
}
