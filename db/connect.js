
exports.connect = function() {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'rootme',
    database : 'matcha'
    });
    console.log("salut db");
    connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn");
        return (connection);
    } else {
        console.log("Error connecting database ... nn");
    }
    });
}