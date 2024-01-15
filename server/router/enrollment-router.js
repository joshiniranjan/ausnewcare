const express = require('express');
const router =  express.Router();
const validate = require('../middlewares/validate-middleware');
const { enrollmentSchema } = require('../validators/auth-validators');
const enrollments = require('../controllers/enrollment-controller');


router.route('/enrollment').post(validate(enrollmentSchema), enrollments )

module.exports = router;