const express = require('express');
const router = express.Router();

const courseController = require('../controllers/course-controller');
const appController = require('../controllers/app-controller');

router.route('/app').get(appController.getAppData);

router.route('/courses').get(courseController.getAllCourses);
router.route('/courses/:id').get(courseController.getCourseById);

module.exports = router;