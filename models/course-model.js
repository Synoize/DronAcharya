const { Schema, model } = require('mongoose');

const CourseSchema = new Schema({
    url: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    language: { type: String, required: true },
    lecturer: { type: String, required: true },
    update: { type: String, required: true },
    duration: { type: String, required: true },
    offer: { type: String, required: true },
});

const CourseModel = new model("Course", CourseSchema);

module.exports = CourseModel; 