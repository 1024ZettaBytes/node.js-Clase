var persona = {
    nombre:"Eduardo",
    apellido: "Ramírez",
    edad : 21,
    nomCompleto:function(){
        return this.nombre+" "+this.apellido;
    }
};
console.log(persona.nomCompleto());
console.log(persona["apellido"]);

persona.mitadEdad = function(){
return this.edad/2;
};
console.log(persona.mitadEdad());