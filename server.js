var http = require("http");
function solicitud(req, res){
res.write("<h1>Hola cliente</h1>");
res.end();
}
http.createServer(solicitud).listen(1919);