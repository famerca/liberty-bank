const express = require('express')
const router = express.Router();
const DB = require("./db")
// const mariadb = require("mariadb")

// const pool = mariadb.createPool({
//   host: "localhost",
//   user: "danyr58",
//   password: "Daniel-1234",
//   database: "bookstore"
// })



router.get("/api/movimientos", async (req, res) => {
  DB.select("SELECT * FROM `bd_usuario`").then(x => console.log(x));
  res.send("hello")
})

module.exports = router;
