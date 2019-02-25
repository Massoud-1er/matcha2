var getU = require('./Userdb');
const express = require('express');
// var account = require('./routes/account');
var bodyParser = require('body-parser');
const app = express();


console.log("in server", getU.getUser(1));
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
});


//POUR RECUPERER INFOS DB POUR AFFICHAGE PROFILE
// // create a GET route
app.get('/Profile', (req, res) => {
  // console.log(res);
  var connection = require('./db/connect');
  let sql = `SELECT * FROM profil WHERE id = 1`;
  connection.query(sql, (err, result) => {
  if(err) throw err;
  else {
  res.send({ express: JSON.stringify(result)});
  //res.send({ express: result});
}});});

//POUR RECUPERER INFOS DB POUR MATCHING
app.get('/Browse', (req, res) => {
  // console.log(res);
  var connection = require('./db/connect');
  let sql = `SELECT * FROM profil WHERE sex = 1`;
  connection.query(sql, (err, result) => {
  if(err) throw err;
  else {
  res.send({ express: JSON.stringify(result)});
  //res.send({ express: result});
}});});




// test route
// router.get('/', function(req, res) {
//   res.json({ message: 'welcome to our upload module apis' });
// });

// router.post('/register',account.register);
// router.post('/login',account.login)
// app.use('/api', router);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
