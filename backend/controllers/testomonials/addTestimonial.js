const { Testimonial } = require("../../models/testimonials");

async function handleAddTestimonial(req,res){
    try{
        const {testimonial_name,testimonial_content}=req.body;
        
        // validation
        
        // create testimonials
        const testimonials = await Testimonial.create({
            testimonial_name,
            testimonial_content,
            testimonial_img:"image url"
        })
    
        if(!testimonials){
            return res.status(400).json({message:"Failed to add testimonial"})
        }
        else{
            res.status(200).json({message:"testimonial added successfully",    data:testimonials})
        }
    }
    catch(error){
        res.status(500).json({message:"Internal server error", error:error})
    }
    
}

module.exports={
    handleAddTestimonial
}
