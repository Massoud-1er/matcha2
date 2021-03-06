var getU = require('./Userdb');
const express = require('express');
var redis   = require("redis");
var client  = redis.createClient();
var account = require('./routes/account');
var bodyParser = require('body-parser');
const uuid = require('uuid/v4');
const session = require('express-session');
var redisStore = require('connect-redis')(session);
const expressSanitizer = require('express-sanitizer');

const app = express();


console.log("in server", getU.getUser(1));
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressSanitizer());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// add & configure middleware
app.use(session({
  genid: (req) => {
    console.log('Inside the session middleware')
    console.log(req.sessionID)
    return uuid() // use UUIDs for session IDs
  },
  store: new redisStore(),
  secret: '343ji43j4n3jn4jk3n',
  resave: false,
  saveUninitialized: true
}))

// create the homepage route at '/'
app.get('/', (req, res) => {
  console.log('Inside the homepage callback function')
  console.log(req.sessionID)
  res.send(`You hit home page!\n`)
})

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
app.use('/Browse', (req, res) => {
  var sex = 1;
  console.log('test de reception  ',req.body);
  var connection = require('./db/connect');
  let sql = `SELECT * FROM profil WHERE sex = 1 AND age BETWEEN 2 AND 4`; 
  connection.query(sql, [sex, req.body.ageMin, req.body.ageMax], (err, result) => {
  if(err) throw err;
  else {
    console.log("le resultat: ", JSON.stringify(result));
    res.send({ express: JSON.stringify(result)});
    // res.send({ express: "dedededede"});
  //res.send({ express: result});
}});});




// test route
// router.get('/', function(req, res) {
//   res.json({ message: 'welcome to our upload module apis' });
// });

// router.post('/register',account.register);
// router.post('/login',account.login)
// app.use('/api', router);
//  Login POST and GET routes

app.get('/login', (req, res) => {
  console.log('Inside GET /login callback function')
  console.log(req.sessionID)
  res.send(`You got the login page!\n`)
})

app.post('/login', (req, res) => {
  console.log('Inside POST /login callback function')
  console.log(req.body);
  account.login(req, res);
  console.log("session", req.session);
  // res.send(`You posted to the login page!\n`)
})

// Logout -> destroy session

app.post('/logout', (req, res) => {
  console.log(req.session);  
  if (req.session){
    req.session.destroy();}
    console.log("apres destroy", req.session);
  res.redirect('/');
});

app.post('/register', (req, res) => {
  console.log("i registered");
  account.register(req, res);
});

app.post('/reset', (req, res) => {
  console.log("i ask for reset");
  console.log(req.body.email);
  if (req.body.email)
  { console.log("inside if");
    account.reinitialisation(req, res);}
});

app.get('/confirmation/*', (req, res)=>{
  console.log("i confirmed");
  account.verify(req, res);
  res.redirect('/');
})

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
