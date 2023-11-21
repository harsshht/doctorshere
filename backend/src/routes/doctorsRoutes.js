const express = require('express');
const doctorsController = require('../controllers/doctorsController');

const router = express.Router();

router.get('/:specialty', doctorsController.getDoctorsBySpecialty);

module.exports = router;
