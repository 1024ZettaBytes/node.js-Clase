const express = require("express");
const app = express();
const path = require('path');
const morgan = require('morgan');
const indexRoutes = require('./routes/index');
// configuraciones
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
// rutas
app.use('/', indexRoutes);
// Inicio de servidor
app.listen(3000, ()=>{
console.log("Server corriendo en el puerto 3000");
});