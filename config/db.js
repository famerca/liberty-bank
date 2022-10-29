const mariadb = require("mariadb")
const pool = mariadb.createPool({
  host: "localhost",
  user: "",
  password: "",
  database: "bookstore"
})




module.exports = pool

