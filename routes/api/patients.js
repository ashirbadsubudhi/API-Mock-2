const express = require("express");
const router = express.Router();
const passport = require("passport");

const patientsController = require('../../controllers/patient_controller');
const reportsController = require('../../controllers/reports_controller');

router.post('/register', patientsController.registerPatient);
router.post('/:id/create_report', passport.authenticate("jwt"), reportsController.createReport);
router.get('/:id/all_report', passport.authenticate("jwt"), reportsController.allReport);


module.exports = router;