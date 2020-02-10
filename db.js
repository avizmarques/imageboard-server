const Sequelize = require("sequelize");
const dbUrl =
  process.env.DATABSE_URL ||
  "postgres://postgres:whatever@localhost:5432/postgres";

const db = new Sequelize(dbUrl);

db.sync()
  .then(console.log("Database is synced"))
  .catch(console.error);

module.exports = db;
