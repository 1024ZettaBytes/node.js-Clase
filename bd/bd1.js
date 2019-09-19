var mysql = require('mysql');
var conexion = mysql.createConnection({
    host:"localhost",
    user:"root",
    password :"sesamo",
    database:"mybd"
});
console.log("[*] Estableciendo conexión...");
conexion.connect((err)=>{
if(err!==null){
    console.log("ERROR: Error de conexión.");

}
else{
    console.log("Conexión exitosa!");
    //var alta = "INSERT INTO alumno VALUES(165284, 'JOSE LOPEZ SANCHEZ')"
    //conexion.query(alta);
    conexion.query("SELECT * FROM alumno", (err, res, cols)=>{
        console.log(res[0].nombre);
    });
    //conexion.end();
}
});
console.log("[*] Continuando con el programa...");