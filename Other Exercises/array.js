
var arreglo = [];
var estado = null;
exports.ejecuta=(state, segundos)=>{
    if(estado!==null){
        console.log("Terminó el tiempo y no se guardó porque estado ya era:"+estado);
        estado = state;
    }
    else{
       console.log("Estado enviado al usuario = "+state);
    }
    setTimeout(() => {
        
    }, segundos);
}