const mongoose = require('mongoose');
const { Course } = require('../../models/course');

async function handleDeleteCourse(req, res) {
    const courseId = req.params.course_id;
    
    // Check if the provided ID is a valid MongoDB ObjectID
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
        return res.status(400).json({ message: 'Invalid course ID format' });
    }

    try {
        // Attempt to find and delete the course by ID
        const course = await Course.findByIdAndDelete(courseId);

        // If the course doesn't exist, return a 404
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Send a success response
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        // Handle any errors that occur
        res.status(500).json({ message: 'Error deleting course', error });
    }
}

module.exports = {
    handleDeleteCourse,
};
