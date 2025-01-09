const CourseModel = require('../models/course-model');

// Get All Course Logic
const getAllCourses = async (req, res) => {
    try {
        const response = await CourseModel.find();
        if (!response) {
            res.status(404).json({ mag: "No Courses found" });
        }
        res.status(200).json({ msg: response })
    } catch (error) {
        next(error);
    }
}

// Course Add Logic
const addCourse = async (req, res) => {
    try {
        const response = req.body;
        await CourseModel.create(response);
        if (response) {
            console.log("Course added successful");
        }
        return res.status(200).json({ message: "Course added successful" });
    } catch (error) {
        next(error);
    }
}

// Course Update Logic
const updateCourseById = async(req, res) => {
    try {
        const id = req.params.id;
        const updateCourseData = req.body;
        const updateCourse = await CourseModel.updateOne({_id: id}, {$set: updateCourseData})
        return res.status(200).json(updateCourse);
    } catch (error) {
        next(error);
    }
}

// Course Delete Logic
const deleteCourseById = async ( req, res ) => {
    try {
        const id = req.params.id;
        await CourseModel.deleteOne({_id: id});
        return res.status(200).json({message: "Course Deleted Successfully"});
    } catch (error) {
        next(error);
    }
}

// Get Single Course Logic
const getCourseById = async(req, res) => {
    try {
        const id = req.params.id;
        const data = await CourseModel.findOne({_id: id}, {password: 0});
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

module.exports = { getAllCourses, addCourse, updateCourseById, deleteCourseById, getCourseById }; 