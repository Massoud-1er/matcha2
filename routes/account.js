//
//  Registration functions
//

function registrationMail(newUserMail){
  const sendmail = require('sendmail')();
  
  const body = "YOYO LES GARs";
 
  sendmail({
    from: 'no-reply@matcha.com',
    to: newUserMail,
    subject: 'You just registered to Matcha !',
    html: body,
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});
}

exports.register = function (req, res) {
  // var connect_to_db = require('../db/connect');
  // const connection = connect_to_db.connect();
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rootme',
  database : 'matcha'
  });
  connection.connect(function(err){
  if(!err) {
      console.log("Database is connected ... nn");
  } else {
      console.log("Error connecting database ... nn");
  }
  });
  var users = {
    "first_name": req.body.firstName,
    "last_name": req.body.lastName,
    "mail": req.body.email,
    "passwd": req.body.password,
    // "birthday":req.body.birthday,
  }
  for (var key in users) {
    users[key] = users[key].trim();
}
  let sql = "INSERT INTO user SET ?";
  connection.query(sql, users, (err, results) => {
    if (err) {
      throw (err);
    }
   else{
    registrationMail(users.mail);
    res.send({
        "code":200,
        "success":"user registered sucessfully"
          });
    }
  });
}


//
//  Login function
//


exports.login = function (req, res) {
  // var connect_to_db = require('../db/connect');
  // const connection = connect_to_db.connect();
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rootme',
  database : 'matcha'
  });
  connection.connect(function(err){
  if(!err) {
      console.log("Database is connected ... nn");
  } else {
      console.log("Error connecting database ... nn");
  }
  });
  console.log("req body in email function", req.body);
  var email = req.body.email;
  var password = req.body.password;
  connection.query('SELECT * FROM user WHERE mail = ?', [email], function (error, results, fields) {
    if (error) {
      console.log("error ocurred", error);
      res.send({
        "code": 400,
        "failed": "error ocurred"
      })
      console.log("1");
    } else {
      console.log('The solution is: ', results);
      if (results.length > 0) {
        if (results[0].passwd == password) {
          req.session.user = results[0].mail;
          // req.session.admin = results[0].admin;
          res.send({
            "code": 200,
            "success": "login sucessfull"
            
          });
          console.log("2");
        }
        else {
          res.send({
            "code": 204,
            "success": "Email and password does not match"
            
          });
          console.log("3");
        }
      }
      else {
        res.send({
          "code": 204,
          "success": "Email does not exits"
        });
        console.log("4");
      }
    }
  });
}