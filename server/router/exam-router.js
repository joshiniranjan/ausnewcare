const express = require('express');
const exams = require('../controllers/examController');
const router =  express.Router();


router.route('/mocktest').get(exams)

module.exports = router;