//importing library
const express = require('express');
const mongoose = require('./config/mongoose')
const passport = require("passport");
const passportJwt = require("./config/passport-jwt-strategy");

//defining port
const port = 8000;

const app = express();
app.use(express.urlencoded());

//router
app.use('/', require('./routes'));

//start server
app.listen(port, function(err){
    if(err) 
        console.log('Error: ',err);
    else
        console.log('Server is running on PORT: ', port);
});