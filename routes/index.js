var express = require('express');
var router = express.Router();
var request = require('superagent');

/* GET home page. */
router.get('/', function(req, res, next) {

  request
    .get('http://localhost:3000/users')
    .set('Accept', 'application/json')
    .end(function(err, result){
      // Calling the end function will send the request
      console.log(result.body);
      res.render('index', { title: 'Bootstrap DataTables', data:  result.body});
    });



});

module.exports = router;
