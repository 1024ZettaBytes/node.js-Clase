var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sesamo",
    database: "mybd"
});
console.log("[*] Program started.");
let promise = new Promise((resolve, reject) => {

    connection.connect((err) => {
        console.log("[*] Connecting to te DB...");
        if (err) return reject(err.code);
        else {
            console.log("[*] Connected!");
            connection.query("SELECT * FROM alumno", (err, res, cols) => {
                console.log("[*] Data:");
                return resolve(res);
            });
        }
    });
});
promise.then((par1)=>{
    console.log(par1);
    connection.end();
}).catch((e)=>{
    console.log(e);
});
console.log("[*] Program finished.");