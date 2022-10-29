const express = require('express')
const router = express.Router();
const pool = require("./../config/db")
// const mariadb = require("mariadb")

// const pool = mariadb.createPool({
//   host: "localhost",
//   user: "danyr58",
//   password: "Daniel-1234",
//   database: "bookstore"
// })



router.get("/api/movimientos", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection()
    const datos = await conn.query("show tables;");
    console.log(datos);
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
