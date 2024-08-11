const express=require("express");
const { handleAddCourse } = require("../controllers/course/addCourse");
const { handleDeleteCourse } = require("../controllers/course/deleteCourse");
const { handleUpdateCourse } = require("../controllers/course/updateCourse");
const { handleGetCourse, handleGetCourseById } = require("../controllers/course/getCourse");
const courseRouter=express.Router();

courseRouter.post("/add_course",handleAddCourse);
courseRouter.delete("/delete_course/:course_id",handleDeleteCourse);
courseRouter.put("/update_course/:course_id",handleUpdateCourse);
courseRouter.get("/get_course",handleGetCourse);
courseRouter.get("/get_course/:course_id",handleGetCourseById);

module.exports={
    courseRouter,
}
