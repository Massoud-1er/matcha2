var connect_to_db = require('./connect');
const db = connect_to_db.connect();


class User { 
    constructor() {
    // super(props);
   const state = {
        login: null,
        passwd: null,
        mail: null
    };
    // this.onChange = this.onChange.bind(this);
}
    set setUser(userData) {
        this.setState({
            login: userData.login,
            passwd: userData.passwd,
            mail: userData.mail
        });
    }
    addToDb() {
        let sql = 'INSERT INTO user (login, passwd, mail) VALUES ('+ this.state.login + ',' + this.state.passwd + ',' + this.mail + ')';
        db.query(sql, (err, result) => {
            if(err) throw err;
            console.log(result);
            console.log("user added");
        });
    }
}

var userData = {login: "dede", passwd: "mdp", mail: "mail"};

var aUser = new User();
aUser.setUser = userData;