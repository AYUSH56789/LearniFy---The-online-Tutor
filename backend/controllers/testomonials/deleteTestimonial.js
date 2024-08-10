const { Testimonial } = require("../../models/testimonials");

async function handleDeleteTestimonial(req,res){
    try{
        const {testimonial_id}=req.body;
        
        // validation
        
        // find testimonials
        const testimonials = await Testimonial.findById(testimonial_id)
    
        if(!testimonials){
            return res.status(400).json({message:"Invalid Testimonials"})
        }
        else{
            if(await Testimonial.findByIdAndDelete(testimonial_id)){
                res.status(200).json({message:"Testimonial delete successfully",    data:testimonials})
            }
        }
    }
    catch(error){
        res.status(500).json({message:"Internal server error", error:error})
    }
    
}

module.exports={
    handleDeleteTestimonial
}
