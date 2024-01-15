const express = require('express');
const quizes = require('../controllers/quizController');
const router =  express.Router();


router.route('/quiz').get(quizes)

module.exports = router;