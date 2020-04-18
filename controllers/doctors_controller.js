const Doctor = require('../models/doctor');
const jwt = require('jsonwebtoken');

//register page
module.exports.register = async function(req, res){
    let doctor = await Doctor.create(req.body);
    return res.json(400,{
        message: 'Doctor registration successful!'
    });

}

//login doctor
module.exports.login = async function(req, res){
    try{
        let doctor = await Doctor.findOne({username: req.body.username});
        // console.log(req.body);
        // console.log(doctor.toJSON());
        if(doctor.password != req.body.password){
            return res.json(500, {
                message: "Invalid"
              });
        }
        return res.json(200,{
            data: {
                doctor: doctor,
                token: jwt.sign(doctor._id.toJSON(),'secret')
            }
        });
    }
    catch (err){
        return res.json(500, {
            message: "Internal Server Error "
          });
    }
}
