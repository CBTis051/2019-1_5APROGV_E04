require('./config/config');

const express = require('express');
const mysql = require('mysql2');
const app = express();

const bosyparser = require('body-parser');
// parse aplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded( { extended: false}) )

// parse aplication/json
app.use(bodyParser.json())

/**
 * Home server
 */
app.get('/', (req, res) => {
    let objeto = {
        mensaje : "Bienvenido al REST server de 5APROGV Equipo 04"
    };

    res.send(objeto);
});

app.listen(process.env.PORT, () => {
    console.log("Server running on Port ", process.env.PORT);
});