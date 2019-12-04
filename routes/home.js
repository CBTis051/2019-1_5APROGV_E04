const express = require('express');
const app = express();

/**
 * Home server
 */
app.get('/', (req, res) => {
    let objeto = {
        mensaje : "Bienvenido al REST server de 5APROGV Equipo 04"
    };

    res.send(objeto);
});

module.exports = app;