const Sequelize = require("sequelize");

const sequelize = new Sequelize("db_node-complete", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
