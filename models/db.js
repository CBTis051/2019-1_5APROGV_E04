const Sequelize = require('Sequelize');

//Conexion a la DB con Sequelize
const sequelize = new Sequelize('proyecto', 'root', 'Acbtis51-', { 
    host: '3.83.155.207',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Conecction has been established succesfully');
    })
    .catch(err => {
        console.error('Unable to connnec to the database: ', err);
    });

module.exports = sequelize;