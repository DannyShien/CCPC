const Pool = require("pg").Pool;

const pool = new Pool({
  user: "",
  password: "33163 ",
  host: "localhost",
  port: 5432,
  database: "ccpc",
});

module.exports = pool;
