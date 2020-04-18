const Patient = require("../models/patient");

module.exports.registerPatient = async function(req, res){
    try{
        let patient = await Patient.findOne({phone_no: req.body.phone_no});
        if (patient) {
            return res.json(200, {
              data: {
                patient: patient
                }
            });
        }
        patient = await Patient.create(req.body);
        return res.json(200, {
            data: {
              patient: patient
            },
            message: "Patient Created!"
          });
    }
    catch(err){
        return res.json(500, {
            message: "Internal Server Error "
          });
    }
}
