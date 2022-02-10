const express = require('express');

//medecinController
const met = require('../controller/meteoController');

//router
const router = express.Router();

//path
router.get('/', met);

//module exportation
module.exports = router;