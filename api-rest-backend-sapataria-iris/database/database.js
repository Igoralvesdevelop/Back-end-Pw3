const Sequelize = require('sequelize');


const connection = new Sequelize(
    'sapataria',
    'root',
    '',
    {
        host: 'localhost',
        port: '3306',
        dialect: 'mysql',
        timezone: '-03:00',
        password: 'neto12512y'
    }
);

module.exports = connection;