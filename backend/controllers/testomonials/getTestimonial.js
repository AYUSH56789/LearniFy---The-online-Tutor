const { Testimonial } = require("../../models/testimonials");

async function handleGetTestimonial(req,res){
    try{
               
        // find all testimonials
        const testimonials = await Testimonial.find({})
        res.status(200).json({message:"Testimonial fetch successfully",    data:testimonials})
    }
    catch(error){
        res.status(500).json({message:"Internal server error", error:error})
    }
    
}


module.exports={
    handleGetTestimonial,
}
