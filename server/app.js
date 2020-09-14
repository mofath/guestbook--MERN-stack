const express = require("express");
const app = express();
// packages import
const bodyParser = require("body-parser");
const cockieParser = require('cookie-parser');
// routes import
const authRoute = require('./routes/auth.route');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cockieParser());

// handle cors 
app.use((req, res, next) => {
    console.log('\x1b[34m%s\x1b[38m', "...NEW CONNECTION MADE...");

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// Routes which should handle requests
app.use('/user/auth', authRoute);


// override 404 error
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

// catch Error
app.use((error, req, res, next) => {
    console.log('\x1b[33m%s\x1b[0m', "...ERROR CAUGHT...");

    console.log('\x1b[33m%s\x1b[0m',"Error:", error.message );

    // console.error(error.message)
    return res.status(error.status || 500).json({ message: { msgBody: error.message, msgError: true } });
});

module.exports = app;