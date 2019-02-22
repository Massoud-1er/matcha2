const express = require('express');
var account = require('./routes/account');
var bodyParser = require('body-parser');
const app = express();
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
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// test route
router.get('/', function(req, res) {
  res.json({ message: 'welcome to our upload module apis' });
});

router.post('/register',account.register);
router.post('/login',account.login)
app.use('/api', router);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
