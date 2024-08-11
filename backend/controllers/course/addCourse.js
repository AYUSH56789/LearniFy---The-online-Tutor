const { Course } = require('../../models/course'); // Adjust the path to where your model is defined

async function handleAddCourse(req, res) {
    try {
        // Extract data from the request body
        const {
            courseName,
            courseDescription,
            courseTag,
            coursePrice,
            discountRate,
            courseCouponCode,
            enrollment,
            rating,
            reviews,
            whatYouWillLearn,
            courseContent,
            coursePrerequisites,
            createdBy,
            courseDuration,
            language,
            level
        } = req.body;

        // Validation
        if (!courseName || !courseDescription || !createdBy) {
            return res.status(400).json({
                message: 'Course name, description, and creator are required fields'
            });
        }

        // Create course
        const newCourse = await Course.create({
            courseName,
            courseDescription,
            courseTag,
            coursePrice,
            discountRate,
            courseCouponCode,
            enrollment,
            rating,
            reviews,
            whatYouWillLearn,
            courseContent,
            coursePrerequisites,
            createdBy,
            courseDuration,
            language,
            level
        });

        if (!newCourse) {
            return res.status(400).json({ message: 'Failed to add course' });
        } else {
            return res.status(201).json({
                message: 'Course added successfully',
                data: newCourse
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
}

module.exports = {
    handleAddCourse
};
