const express = require('express');
var account = require('./routes/account');
var bodyParser = require('body-parser');
const uuid = require('uuid/v4')

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.get('/', (req, res) => {
//   console.log("yoyo");
//   console.log(req)
//   const uniqueId = uuid()
//   res.send(`Hit home page. Received the unique id: ${uniqueId}\n`)
// })

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.post('/register', (req, res) => {
  console.log("i registered");
  account.register(req, res);
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
