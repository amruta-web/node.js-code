const Sequelize = require("sequelize").DataTypes;
module.exports = {
  md5: { type: Sequelize.STRING(32) , primaryKey: true,},
  host: { type: Sequelize.STRING(32) },
  port: {type: Sequelize.INTEGER},
  password: {  type: Sequelize.STRING(32) },
  add_time: { type: Sequelize.DATE },

};
