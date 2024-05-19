const Sequelize = require("sequelize");

const sequelize = new Sequelize("db_node-complete", "root", "", {
  dialect: "mysql",
  host: "localhost",
  timezone: "+07:00",
});

module.exports = sequelize;
