const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'rootme',
    // database : 'nodemysql'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

// Create DB
    let sql = 'CREATE DATABASE IF NOT EXISTS matcha';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        console.log("database created");
    });

// Create table
    let sql1 = 'CREATE TABLE IF NOT EXISTS matcha.user(id int AUTO_INCREMENT, first_name VARCHAR(255), last_name VARCHAR(255), passwd VARCHAR(255), mail VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql1, (err, result) => {
        if(err) throw err;
        console.log(result);
        console.log("table user created");
    });

    let sql2 = 'CREATE TABLE IF NOT EXISTS matcha.photo(id int AUTO_INCREMENT, id_user VARCHAR(255), img_path VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql2, (err, result) => {
        if(err) throw err;
        console.log(result);
        console.log("table photo created");
        // res.send('Posts table created...');
    });

    let sql3 = 'CREATE TABLE IF NOT EXISTS matcha.comment(id int AUTO_INCREMENT, id_img VARCHAR(255), comment VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql3, (err, result) => {
        if(err) throw err;
        console.log(result);
        console.log("table comment created");
    });
/*
// Insert post 1
app.get('/addpost1', (req, res) => {
    let post = {title:'Post One', body:'This is post number one'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});

// Insert post 2
app.get('/addpost2', (req, res) => {
    let post = {title:'Post Two', body:'This is post number two'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 2 added...');
    });
});

// Select posts
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Posts fetched...');
    });
});

// Select single post
app.get('/getpost/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post fetched...');
    });
});

// Update post
app.get('/updatepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post updated...');
    });
});

// Delete post
app.get('/deletepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post deleted...');
    });
});
*/