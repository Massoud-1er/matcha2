var connect_to_db = require('../db/connect');
const connection = connect_to_db.connect();

exports.register = function(req,res){
    console.log("req",req.body);
    var today = new Date();
    var users={
      "login":req.body.first_name,
      "mail":req.body.email,
      "passwd":req.body.password,
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
    if (error) {
      console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      console.log('The solution is: ', results);
      res.send({
        "code":200,
        "success":"user registered sucessfully"
          });
    }
    });
  }

  exports.login = function(req,res){
    var email= req.body.login;
    var password = req.body.password;
    connection.query('SELECT * FROM users WHERE login = ?',[login], function (error, results, fields) {
    if (error) {
      console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      console.log('The solution is: ', results);
      if(results.length >0){
        if(results[0].passwd == password){
          res.send({
            "code":200,
            "success":"login sucessfull"
              });
        }
        else{
          res.send({
            "code":204,
            "success":"Email and password does not match"
              });
        }
      }
      else{
        res.send({
          "code":204,
          "success":"Email does not exits"
            });
      }
    }
    });
  }