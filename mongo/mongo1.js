var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
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
                console.log(result[0]);
                conn.close();
            }
        });
    }
});