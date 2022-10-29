const express = require('express')
const router = express.Router();
const {selectDB, queryDB} = require("./db")

//solo para pruebas
router.get("/usuarios", async (req, res) => {
  selectDB("bd_usuario").then(x => res.json(x));
})

router.get("/usuarios/prueba", async (req, res) => {
  queryDB("UPDATE bd_usuario SET correo = 'pruebaupdate' where ID_usuario = 1")
  .then(x => res.send('ok'), err => res.send('error'))

})


module.exports = router;
