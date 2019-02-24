const express = require('express');
const app = express();
var bodyParser = require('body-parser');


const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


module.exports = function(app){
app.get('/Profile', (req, res) => {
    // console.log(res);
    var connection = require('./connect');
    let sql = `SELECT * FROM user WHERE id = 1`;
    connection.query(sql, (err, result) => {
    if(err) throw err;
    else {
    console.log(result);
  }});});
}

app.listen(port, () => console.log(`Listening on port ${port}`));


//NON UTILLISE POUR LE MONENT