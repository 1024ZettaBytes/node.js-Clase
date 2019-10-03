var fs = require('fs')
var promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        fs.writeFile('c:\\temp\\archivo.txt', "Mensaje en el archivo", (error) => {
            if (error) {
                return reject(error);
            }
            else {
                return resolve("Exito archivo creado!");
            }
        });
    }, 2000);
});

promesa.then((res) => {
    fs.readFile('c:\\temp\\archivo.txt', (err, data) => {
        if (err) {
            console.log("ERROR: al leer del archivo.");
        }
        else
            console.log(data.toString());
    });
}).catch((err) => {
    console.log("ERROR en promesa");
});