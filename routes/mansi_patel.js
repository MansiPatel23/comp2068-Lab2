var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mansi_patel', { name: 'Mansi Patel', age: '30', program: 'Computer Programmer', description: 'I love computer programming because it is give me the power to create something out of nothing by just typing some code.'});
});




module.exports = router;