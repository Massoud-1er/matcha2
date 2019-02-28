//
//  Token in table verification
//

function insertToken(token, mail, reinitToken) {
  var connection = require('../db/connect');
  
  var post = { token: token, mail: mail, reinitToken: reinitToken };
  let sql = "INSERT INTO verification SET ?";
  connection.query(sql, post, (err, res) => {
    if (err) {
      throw (err);
    }
  });
}

//
// Reinitialisation Mail
//

function reinitialisationMail(token, userMail, host) {
  const sendmail = require('sendmail')();
  const body = 'Hello,\n\n' + 'Please follow this link to reset your email: \nhttp:\/\/' + host + '\/reset\/' + token + '.\n';
  sendmail({
    from: 'no-reply@matcha.com',
    to: userMail,
    subject: 'Reset your password !',
    html: body,
  }, function (err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
  });
}

//
// Registration Mail
//

function registrationMail(token, newUserMail, host) {
  const sendmail = require('sendmail')();
  const body = 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + host + '\/confirmation\/' + token + '.\n';
  sendmail({
    from: 'no-reply@matcha.com',
    to: newUserMail,
    subject: 'You just registered to Matcha !',
    html: body,
  }, function (err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
  });
}

//
//  Registration functions
//

exports.register = function (req, res) {
  var crypto = require('crypto');
  var connection = require('../db/connect');
  const bcrypt = require('bcrypt');
  
  var token = crypto.randomBytes(16).toString('hex');
  console.log(req.body);
  let hash = bcrypt.hashSync(req.body.password, 10);
  var users = {
    "first_name": req.body.firstName,
    "last_name": req.body.lastName,
    "mail": req.body.email,
    "passwd":hash, 
    // "birthday":req.body.birthday,
  }
  for (var key in users) {
      users[key] = users[key].trim();
  }
  connection.query('SELECT * FROM user WHERE mail = ?', [users.mail], function (error, results) {
    if (error) {
      console.log("error ocurred", error);
      results.send({
        "code": 400,
        "failed": "error ocurred"
      })
    } else {
      if (results.length > 0) {
        console.log("This email is already in used");
      }
      else {
        let sql = "INSERT INTO user SET ?";
        connection.query(sql, users, err => {
          if (err) {
            throw (err);
          }
          else {
            insertToken(token, users.mail, "");
            registrationMail(token, users.mail, req.headers.host);
          }
        });
      }
    }
  });
}

//
//  Validation function
//

exports.verify = function (req, res) {

  var connection = require('../db/connect');
  console.log("in verify");
  token = req.path.slice(14, -1);
  console.log(token);
  connection.query('SELECT * FROM verification WHERE token = ?', [token], function (error, results) {
    if (error) {
      console.log("error ocurred", error);
      results.send({
        "code": 400,
        "failed": "error ocurred"
      });
    }
    else {
      if (results.length > 0) {
        var mail = results[0].mail;
        console.log(mail);
        connection.query('UPDATE user SET isVerified = 1 WHERE mail = ?', [mail], function (error, res) {
          if (error) {
            console.log("error ocurred", error);
            res.send({
              "code": 400,
              "failed": "error ocurred"
            });
          } else {
            res.send({
              "code": 200,
              "success": "User is now admin"
            });
          }
        });
      }
    }
  });
}

exports.reinitialisation = function (req, res) {
  var crypto = require('crypto');
  var connection = require('../db/connect');
  
  var reinitToken = crypto.randomBytes(16).toString('hex');
  console.log("in reset");

  var email = req.body.email;
  connection.query('SELECT * FROM user WHERE mail = ?', [email], function (error, results) {
    if (error) {
      console.log("error ocurred", error);
      results.send({
        "code": 400,
        "failed": "error ocurred"
      });
    }
    else {
      if (results.length > 0) {
        insertToken("", users.mail, reinitToken);
        reinitialisationMail(reinitToken, email, req.headers.host);
          }
      else {
        res.send({
          "code": 204,
          "success": "Email doest not exist"
        });
      }
    }
  });
}

//
//  Login function
//

exports.login = function (req, res) {
  var connection = require('../db/connect');
  const bcrypt = require('bcrypt');

  var email = req.body.email;
  var password = req.body.password;
  connection.query('SELECT * FROM user WHERE mail = ?', [email], function (error, results, fields) {
    if (error) {
      console.log("error ocurred", error);
      res.send({
        "code": 400,
        "failed": "error ocurred"
      })
    } else {
      if (results.length > 0) {
          if(bcrypt.compareSync(password, results[0].passwd)){
            req.session.user = results[0].mail;
            // req.session.admin = results[0].admin;
            res.send({
              "code": 200,
              "success": "login sucessfull"
            });
          }
        else {
          res.send({
            "code": 204,
            "success": "Email and password does not match"
          });
        }
      }
      else {
        res.send({
          "code": 204,
          "success": "Email does not exits"
        });
      }
    }
  });
}
