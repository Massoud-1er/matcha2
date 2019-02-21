const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.bodyParser());

app.get('/', function(req, res){
  res.render('layout', {
    title: 'Home'
  });
});
app.get('/Login', function(req, res){
  console.log(req.body);
});

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
