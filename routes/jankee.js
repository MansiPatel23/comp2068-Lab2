var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('jankee', { name: 'Jankee Patel', age: '30', program: 'Computer Engineering', description: 'I love to do Modelling'});
});


module.exports = router;