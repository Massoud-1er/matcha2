const express = require('express');
var redis   = require("redis");
var client  = redis.createClient();
var account = require('./routes/account');
var bodyParser = require('body-parser');
const uuid = require('uuid/v4');
const session = require('express-session');
var redisStore = require('connect-redis')(session);

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// create the login get and post routes
app.get('/login', (req, res) => {
  console.log('Inside GET /login callback function')
  console.log(req.sessionID)
  res.send(`You got the login page!\n`)
})

app.post('/login', (req, res) => {
  console.log('Inside POST /login callback function')
  console.log(req.body);
  account.login(req, res);
  console.log(req.session);
  // res.send(`You posted to the login page!\n`)
})

app.post('/register', (req, res) => {
  console.log("i registered");
  account.register(req, res);
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
