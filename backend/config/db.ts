const { Sequelize } = require('sequelize');

const DB_DATABASE= process.env.DB_DATABASE
const DB_PASSWORD= process.env.DB_PASSWORD
const DB_USER= process.env.DB_USER

const sequelize = new Sequelize(DB_DATABASE, DB_USER,DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres' 
});

export default sequelize