const express=require('express');
const { handleDeleteTestimonial } = require("../controllers/testomonials/deleteTestimonial");
const { handleAddTestimonial } = require("../controllers/testomonials/addTestimonial");
const { handleGetTestimonial } = require('../controllers/testomonials/getTestimonial');
const { handleUpdateTestimonial } = require('../controllers/testomonials/updateTestimonial');
const testimonialsRouter=express.Router();

testimonialsRouter.post('/add_testimonial',handleAddTestimonial)
testimonialsRouter.get('/get_testimonial',handleGetTestimonial)
testimonialsRouter.put('/update_testimonial',handleUpdateTestimonial)
testimonialsRouter.delete('/delete_testimonial',handleDeleteTestimonial)

module.exports={
    testimonialsRouter
}