const Sequelize = require('sequelize');
const {username, password, database, host, dialect} = require('../config').db;

module.exports = {
    development: {
        username,
        password,
        database,
        host,
        dialect,
        operatorsAliases: Sequelize.Op
    },
    production: {
        username,
        password,
        database,
        host,
        dialect,
        operatorsAliases: Sequelize.Op
    }
};
