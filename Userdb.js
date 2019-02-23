class User {

    getUser(id) {
        var connection = require('./db/connect');
        let sql = `SELECT first_name FROM user WHERE id = ${id}`;
        connection.query(sql, (err, result) => {
        if(err) throw err;
        else {
            var fstName = JSON.stringify(result[0]['first_name']);
            console.log(fstName);
    }
    });
    }
}

let dede = new User;
dede.getUser(1);