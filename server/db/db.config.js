const env = require("../config/env.js").sequelise;
console.log(JSON.stringify(env));
const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  port: env.port,
  dialect: env.dialect,
  
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables

module.exports = db;
