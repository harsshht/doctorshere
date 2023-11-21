const express = require('express');
const specialtiesController = require('../controllers/specialtiesController');

const router = express.Router();

router.get('/', specialtiesController.getSpecialties);

module.exports = router;
