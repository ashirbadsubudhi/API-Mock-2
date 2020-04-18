const express = require("express");
const router = express.Router();
const passport = require("passport");

const reportsController = require('../../controllers/reports_controller');

router.get('/:status', reportsController.reportByStatus);

module.exports = router;