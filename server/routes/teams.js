var express = require('express');
var router = express.Router();

// No need to re-connect but we do need the mongoose object
var mongoose = require('mongoose');

var StudentSchema = mongoose.Schema({
    student: String
});

var Student = mongoose.model('Student', StudentSchema);

router.get("/", function(req, res) {
  Student.find(function(err, allStudents) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.send(allStudents);
    }
  });
}); //end of get router


module.exports = router;
