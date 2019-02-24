var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost' ,
  user: 'root' ,
  password : '' ,
  database: 'medicard'
})

router.post('/', function(req, res, next) {
  
var code = req.body.code ;

connection.query (
  "SELECT * FROM user Where code = ? " ,
  [code] , function (err , row , field) {
    if(err){
      console.log(err);
      res.send({'success' : false , 'message' : 'could not connect to db'});

    }
    if(row.length > 0 ){
      res.send({'success' : true , 'user' : row[0].code});

    }else {
      res.send({'success' : false , 'message' : 'User not found'})
    }
  }
);



});

module.exports = router;
