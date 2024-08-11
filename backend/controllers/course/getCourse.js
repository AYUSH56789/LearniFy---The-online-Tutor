const mongoose = require('mongoose'); // Required for ObjectId validation
const { Course } = require('../../models/course');

async function handleGetCourse(req, res) {
    try {
        // Find all courses in the database
        const courses = await Course.find({});

        // Send the courses back in the response
        res.status(200).json(courses);
    } catch (error) {
        // Handle any errors that occur
        res.status(500).json({ message: 'Error retrieving courses', error });
    }
}

async function handleGetCourseById(req, res) {
    try {
        // Step 1: Extract the Course ID from request parameters
        const courseId = req.params.course_id;

        // Step 2: Validate the Course ID
        if (!mongoose.Types.ObjectId.isValid(courseId)) {
            return res.status(400).json({ message: 'Invalid course ID format' });
        }

        // Step 3: Fetch the course from the database
        const course = await Course.findById(courseId);

        // Step 4: Handle response
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Return the course data if found
        res.status(200).json(course );

    } catch (error) {
        // Step 5: Handle errors
        console.error('Error fetching course:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

module.exports={
    handleGetCourse,
    handleGetCourseById
}
