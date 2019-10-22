var express = require("express");
var app = express();
app.use(express.json());
var students = [
    {
    "id": 1,
    "name": "Eduardo",
    "lastname": "Ramírez"
    }
    
];
app.get("/", (req, res)=>{
    res.send("Hola");
});
app.get("/alumnos", (req, res)=>{

    res.send(students);
    
});
app.get("/alumnos/:id", (req, res)=>{
    var id = parseInt(req.params.id)-1;
    if(id>students.length-1){
        res.status(404).send("No existe estudiante con ese id");
    }
    else
    res.send(students[id]);
    
});
app.post("/alumnos", (req, res)=>{
    const est = {
        id: students.length+1,
        name: req.body.nombre
    }
    students.push(est);
    res.send(est);
});
app.listen(3000, ()=>{
    
    console.log("Server iniciado en puerto 3000");
});