const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'hardik@218', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
