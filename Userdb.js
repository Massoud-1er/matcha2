exports.getUser = function() {
        var connection = require('./db/connect');
        let sql = `SELECT * FROM user WHERE id = 1`;
        connection.query(sql, (err, result) => {
        if(err) throw err;
        else {
            //var fstName = JSON.stringify(result[0]['first_name']);
            //console.log(fstName);
            // console.log(result[0]);
        // console.log(JSON.stringify(result[0]));
        return (JSON.stringify(result[0]));
    }
    });
}

//NON UTILISE POUR LE MOENT 