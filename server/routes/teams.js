var express = require('express');
var router = express.Router();

// No need to re-connect but we do need the mongoose object
var mongoose = require('mongoose');

var StudentSchema = mongoose.Schema({
    student: String
});

var student = mongoose.model('Students', StudentSchema);


module.exports = router;
