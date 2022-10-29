const express = require('express')
const router = express.Router();
const { selectDB, queryDB } = require("./db")

//solo para pruebas
router.get("/categorias/:id", async (req, res) => {

  const { id } = req.params

  selectDB(`Categoria`, `id_usuario = ${id}`).then(response => res.json(response))
  // res.json(1)
})

router.get("/cuentas/:id", async (req, res) => {

  const { id } = req.params

  selectDB(`db_cuentas`, `id_usuario = ${id}`).then(response => res.json(response))
  // res.json(1)
})

router.post("/cuentas/add", async (req, res) => {

  const { id_usuario } = req.body
  console.log(req.body)

  await queryDB(`INSERT INTO db_cuentas( nombre , numero , titular , banco , id_usuario) VALUES ( '', '' , '', '', ${id_usuario})`).then(response => res.json(response))
})

router.post("/categoria/add", async (req, res) => {

  const { id_usuario } = req.body
  console.log(req.body)

  await queryDB(`INSERT INTO Categoria( nombre, tipo, id_usuario) VALUES ( '', '' , '${id_usuario}')`).then(response => res.json(response))
})


router.post("/cuentas/update", async (req, res) => {

  const { id, nombre, numero, titular, banco } = req.body
  console.log(req.body)

  await queryDB(`UPDATE db_cuentas SET  nombre = '${nombre}', numero = '${numero}' , titular = '${titular}' , banco = '${banco}' WHERE id= '${id}'  `).then(response => res.json(response))
})

router.post("/categoria/update", async (req, res) => {

  const { id, nombre, tipo } = req.body
  console.log(req.body)

  await queryDB(`UPDATE Categoria SET nombre = '${nombre}', tipo = '${tipo}'  WHERE id = '${id}'`).then(response => res.json(response))
})

router.post("/cuentas/delete", async (req, res) => {

  const { id } = req.body
  console.log(req.body)

  await queryDB(`DELETE FROM  db_cuentas   WHERE id= '${id}'  `).then(response => res.json(response))
})

router.post("/categoria/delete", async (req, res) => {

  const { id } = req.body
  console.log(req.body)

  await queryDB(`DELETE FROM Categoria  WHERE id = '${id}'`).then(response => res.json(response))
})

router.get("/usuarios", async (req, res) => {
  selectDB("bd_usuario").then(x => res.json(x));
})



module.exports = router;
