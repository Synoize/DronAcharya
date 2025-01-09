const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin-controller');
const courseController = require('../controllers/course-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');
const validate = require('../middlewares/validate-middleware');
const { adminUserSchema } = require('../validators/admin-user-validator');
const { courseSchema } = require('../validators/course-validator');

router.route('/users').get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router.route('/users/:id').get(authMiddleware, adminMiddleware, adminController.getUserById);
router.route('/users/update/:id').patch(validate(adminUserSchema), authMiddleware, adminMiddleware, adminController.updateUserById);
router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

router.route('/contacts').get(authMiddleware, adminMiddleware, adminController.getAllContacts);
router.route('/contacts/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteContactById);

router.route('/courses').get(authMiddleware, adminMiddleware, courseController.getAllCourses);
router.route('/courses/add').post(validate(courseSchema), authMiddleware, adminMiddleware, courseController.addCourse);
router.route('/courses/:id').get(authMiddleware, adminMiddleware, courseController.getCourseById);
router.route('/courses/update/:id').patch(validate(courseSchema), authMiddleware, adminMiddleware, courseController.updateCourseById);
router.route('/courses/delete/:id').delete(authMiddleware, adminMiddleware, courseController.deleteCourseById);

module.exports = router;