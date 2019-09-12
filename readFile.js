var arch = require("fs");
try{
var lectura = arch.readFileSync("./prueba.txt", "utf-8");
}catch(e){
    console.log("Ocurrió un error");
} 
//arch.writeFileSync("./prueba.txt", "Hola Eduardo");
//arch.appendFileSync("./prueba.txt","Hola2");
console.log(lectura);