const env = {
  sequelise_dev: {
    database: "Test",
    username: "Test_app",
    password: "Test_app1",
    host: "localhost",
    dialect: "mssql",
    port: 1433,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  sequelise: {
    database: "DevDB",
    username: "DevDB_cebdb_Pranav",
    password: "=g=VL1kM7#1",
    host: "macromeasures.database.windows.net",
    dialect: "mssql",
    port: 1433,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  sequelise_prod: {
    database: "CEBDB",
    username: "cebdb01_p2_app",
    password: "cebdb01_p2_app1",
    host: "localhost",
    dialect: "mssql",
    port: 1444,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};

module.exports = env;
