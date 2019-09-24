var arch = require("fs");

arch.readFile("./prueba.txt", (err,data)=>{
    if(err)
        throw err;
    else{
        let objetito = JSON.parse(data);
        console.log(objetito);
    }
    
});

//arch.writeFileSync("./prueba.txt", "Hola Eduardo");
//arch.appendFileSync("./prueba.txt","Hola2");
