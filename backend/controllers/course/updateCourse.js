const mongoose = require('mongoose');
const { Course } = require('../../models/course');


async function handleUpdateCourse(req, res) {
    const courseId = req.params.course_id;
    const updateData = req.body; // The data to update the course with

    // Check if the provided ID is a valid MongoDB ObjectID
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
        return res.status(400).json({ message: 'Invalid course ID format' });
    }

    try {
        // Attempt to find and update the course by ID
        const course = await Course.findByIdAndUpdate(courseId, updateData, {
            new: true, // Return the updated course
            runValidators: true, // Ensure the update follows the schema's validation rules
        });

        // If the course doesn't exist, return a 404
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Send the updated course back in the response
        res.status(200).json(course);
    } catch (error) {
        // Handle any errors that occur
        res.status(500).json({ message: 'Error updating course', error });
    }
}

module.exports = {
    handleUpdateCourse,
};
