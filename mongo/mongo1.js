var mongoClient = require("mongodb").MongoClient;
var http = require("http");
var url = "mongodb://localhost:27017";
var resultado = null;
mongoClient.connect(url, (err, conn)=>{
    if(err){
        console.log(err.code);
    }
    else{
        console.log("Connected to mongo!");
        const dbo = conn.db("prueba2");
        dbo.collection("clientes").find().toArray((err, result)=>{
            if(err){
                console.error("Query ERROR");
            }
            else{
                resultado = result[0];
                conn.close();
            }
        });
    }
});

http.createServer((req, res)=>{
    res.write(JSON.stringify(resultado));
    res.end();
}).listen(699);