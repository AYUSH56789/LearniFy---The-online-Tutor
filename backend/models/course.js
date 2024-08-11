const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for course content
const LectureSchema = new Schema({
    lect_title: { type: String, required: true },
    lect_tag: { type: String, enum: ['video', 'pdf', 'mocktest'], required: true },
    lect_link: { type: String, required: true }
});

const ModuleSchema = new Schema({
    module: { type: String, required: true },
    lecture: [LectureSchema]
});

// Define the schema for reviews
const ReviewSchema = new Schema({
    user_id: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true } // Assuming ratings are on a scale of 1-5
});

// Define the schema for the course
const CourseSchema = new Schema({
    courseName: { type: String, required: true },
    courseDescription: { type: String, required: true },
    courseTag: { type: String },
    coursePrice: { type: String },
    discountRate: { type: String },
    courseCouponCode: { type: String },
    enrollment: [{ user_id: { type: String } }],
    rating: { type: Number, min: 0, max: 5 }, // Average rating
    reviews: [ReviewSchema],
    whatYouWillLearn: [String],
    courseContent: [ModuleSchema],
    coursePrerequisites: [String],
    createdBy: { type: String, required: true },
    courseDuration: { type: String },
    language: { type: String },
    level: { type: String, enum: ['beginner', 'intermediate', 'advanced'] }
});

// create model
const Course = mongoose.model('Course', CourseSchema);

// Create and export the model
module.exports = {
    Course,
};
