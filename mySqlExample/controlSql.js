class controlSql {
    constructor(server, usr, pass, dbName) {
        this.mysql = require("mysql");
        this.dataConn = {
            host: server,
            user: usr,
            password: pass,
            database: dbName
        }
    }

    connect() {
        this.conn = this.mysql.createConnection({
            host: this.dataConn.host,
            user: this.dataConn.user,
            password: this.dataConn.password,
            database: this.dataConn.database
        });
        return new Promise((res, rej) => {
            this.conn.connect(err => {
                if (err)
                   rej(err);
                else
                    res("Connected!");
            });
        });
    }

    test(){
        this.connect().then(res=>{
            console.log(res);
        }).catch(rej=>{
            console.log(rej);
        });
    }
}
module.exports = controlSql;