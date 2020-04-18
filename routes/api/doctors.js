const express = require('express');
const router = express.Router();
const passport = require('passport');

const doctorsController = require('../../controllers/doctors_controller');

router.post('/register', doctorsController.register);
router.post('/login', doctorsController.login);

module.exports = router;