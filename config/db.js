const mariadb = require("mariadb")
const pool = mariadb.createPool({
  host: "localhost",
  user: "danyr58",
  password: "Daniel-1234",
  database: "bookstore"
})




module.exports = pool

