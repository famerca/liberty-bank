const express = require('express')
const router = express.Router();
const {selectDB} = require("./db")

//solo para pruebas
router.get("/usuarios", async (req, res) => {
  selectDB("bd_usuario").then(x => res.json(x));
})

module.exports = router;
