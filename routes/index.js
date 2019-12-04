const express = require('express');
const app = express();

//Archivo de rutas
app.use(require('./home'));
app.use(require('./login'));

module.exports =app;