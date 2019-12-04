const Sequelize = require('sequelize');
const sequelize = require('../models/db');

const Usuario = sequelize.define('usuario', {
    // atributos
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allwNull: false,
        autoIncrement: true
    },
    
    nombre: {
         type: Sequelize.STRING,
         allowNull: false
    },

    usuario: {
        type: Sequelize.STRING,
        allowNull: false
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    rol: {
        type: Sequelize.STRING,
        allowNull: false
    }
},  {
        //options
        //Para que busque los campos createdAt, updateAt
        timestamps: false,
        //Para que cuando consultremos el modelo, no nos regrese la contraseña
        defaultScope: {
            attributes: { exclude: ['password'] },
        }
    }
);

module.exports = Usuario;