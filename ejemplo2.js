var lectura = require("readline-sync")
var nombre = lectura.question("Escribe tu nombre: ");
var edad = lectura.questionInt("Edad: ");
var exNombre = /^[A-Z]{1}/
//var expreg = /^[A-Z]{1,2}\s\d{4}\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/;
console.log(exNombre.test(nombre));
let f = (nombre, edad) => {
    console.log("Tu nombre es " + nombre + " y tu edad es " + edad);
};
f(nombre, edad);
