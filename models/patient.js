const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    phone_no:{
        type: Number,
        unique: true
    }
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;