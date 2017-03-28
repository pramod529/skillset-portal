var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');

var db = mongojs('mongodb://10.249.39.132/testdb');

/* GET All employees */
router.get('/employees/search-list', function(req, res, next) {
    db.employee.find(function(err, employees) {
        if (err) {
            res.send(err);
        } else {
            res.json(employees);
        }
    });

  console.log('test');
});
router.get('/home', function(req, res, next) {
  res.json({
    name: "John",
    last: "Smith"
  });
});
module.exports = router;
