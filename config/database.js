const { Sequelize } = require('sequelize');
module.exports = new Sequelize('photos', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});