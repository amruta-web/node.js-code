const env = require("../config/env.js").sequelise;
// console.log(JSON.stringify(env));
const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  port: env.port,
  dialect: env.dialect,
  
});

const RedisInfo = sequelize.define('redisInfo',  {
    md5: { type: Sequelize.STRING(32) , primaryKey: true,defaultValue:null},
    host: { type: Sequelize.STRING(32) ,defaultValue:null},
    port: {type: Sequelize.INTEGER,defaultValue:0},
    password: {  type: Sequelize.STRING(32) ,defaultValue:null},
    add_time: { type: Sequelize.DATE ,defaultValue:Sequelize.NOW()}
    
  });

  module.exports = RedisInfo

