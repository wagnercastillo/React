const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');


// Crear el servidor de express
const app = express();

// Base de datos 
dbConnection();

const PORT = process.env.PORT;

// Directorio Publico
app.use(express.static('public'));

// Lectura y Parseo del Body
app.use(express.json()); // Permite procesar el contenido json entrante

// Routes
app.use('/api/auth', require('./routes/auth'));


app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`);
});