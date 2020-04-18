const Patient = require("../models/patient");
const Report = require("../models/report");

module.exports.createReport = async function(req,res){
    try{
        let report = await Report.create({
            status: req.body.status,
            date: req.body.date,
            doctor: req.user.id,
            patient: req.query.id
        })
        // console.log(req);
        return res.json(200, {
            report: report
        });
    }
    catch(err){
        return res.json(500, {
            message: "Internal Server Error "
        });
    }
}

module.exports.allReport = async function(req, res) {
    try {
        let patient = await Patient.findById(req.query.id);
        if (!patient) {
            return res.json(400, {
            message: "No such patient exist!"
            });
        }
        let reports = await Report.find({
            patient: req.query.id
        })
        .populate("patient")
        .populate("doctor");
        return res.json(200, {
            report: reports
        });
    }
    catch(err){
        return res.json(500, {
            message: "Internal Server Error "
          });
    }
  }

  module.exports.reportByStatus = async function(req, res) {
    try {
        let reports = await Report.find({
            status: req.query.status
        })
        .populate("patient")
        .populate("doctor");

        return res.json(200, {
            report: reports
        });
    } 
    catch (err) {
      return res.json(500, {
        message: "Internal Server Error"
      });
    }
}