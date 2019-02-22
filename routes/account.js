var connect_to_db = require('../db/connect');
const connection = connect_to_db.connect();

exports.register = function(req,res){
  console.log("dede");  
  console.log(req.body);
    var users={
      "first_name":req.body.firstName,
      "last_name":req.body.lastName,
      "mail":req.body.email,
      "passwd":req.body.password,
      "birthday":req.body.birthday,
    }
    console.log(users);
    let sql = 'INSERT INTO users SET ?';
    connection.query(sql, users, (err, results) => {
    if (err) {
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
    var login= req.body.login;
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