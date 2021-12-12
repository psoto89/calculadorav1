const express = require('express');
const app = express();

// Configuración
app.use(express.static('public'));

// Motor de vistas
app.set("view engine" , "ejs")


// Rutas
const mainRouter = require('./routes/mainRoutes'); // Rutas main

app.use('/', mainRouter);


// Servidor
app.listen(3000, () => { console.log('Servidor funcionando en el puerto 3000.') })