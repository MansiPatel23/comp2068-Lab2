var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('dipu', { name: 'Dipesh Patel', age: '27', program: 'Computer Science', description: 'I love Listening Music'});
});


module.exports = router;