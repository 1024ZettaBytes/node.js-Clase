let car={
    brand :"beetle",
    model:"2003",
    color:"black",
    break: ()=>{
        console.log("break!");
    }
    
}
var stringObject = JSON.stringify(car);
var backToJSON = JSON.parse(stringObject);
console.log(car);
console.log(stringObject);
console.log(backToJSON);