const Sequelize = require('sequelize');
const db = require('../config/database');

const Photo = db.define('photo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    url: {
        type: Sequelize.STRING
    }
})

module.exports = Photo;
