const express = require("express");
const app = express();
// packages import
const bodyParser = require("body-parser");
const cockieParser = require('cookie-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cockieParser());






module.exports = app;