const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const Usuario = require('../models/usuario');

/**
 * Login del server --> /login
 */
app.post('/login', (req, res) => {
    //Obtenemos credenciales
    let body = req.body;

    //Se manda una log con los datos qeu se reciben
    console.log(body);

    //Se busca el usuario
    Usuario.findOne(
        {
            where: {
                usuario: body.usuario,
                password: body.contra
            }
        }
    )
     .then(usuario => {
        // se valida 
        if(usuario != null)
        {
            console.log(usuario);

        //se genera su token JWT
        let token = jwt.sign({
          usuario  
        }, 'seed-secret-5APROGV-E04-icas-2019-1', {expiresIn: 60 * 60 * 24 * 30});

        //se regresa la respuesta
        res.json({
            ok: true, 
            usuario, 
            token
        });
        } else{
            res.status(401).json({
            ok:false,
            err: {
                message: "Usuario o contraseña incorrectos",
            }
        });
    }
})
.catch(err => {
    //se manda a la consola 
    console.log("Error en la consulta: " + err);

    return res.status(500).json({
        ok: false,
        err: {
            message: 'Error  del server al hacer login: ' + err, 
            }
        });
    });
});

module.exports = app;