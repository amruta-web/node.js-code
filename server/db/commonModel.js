
module.exports = tableName => {
    db = require("./db.config.js");
    ddl = require("./db/" + tableName + "Model.js");
    return db.sequelize.define(tableName, ddl, {
      timestamps: false,
      freezeTableName: true,
      createdAt: "DateCreated",
      updatedAt: "DateUpdated"
    });
  };