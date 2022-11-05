const express = require('express')
const router = express.Router();
// <<<<<<< HEAD
const { selectDB, queryDB, db } = require("./db")
const { mapearCuentas } = require('./cuentas')
const bcrypt = require("bcrypt");
const saltRounds = 10;
// =======
// const { selectDB, queryDB } = require("./db")
// const { mapearCuentas } = require('./cuentas')
// >>>>>>> daniel_nuevo

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

  await queryDB(`INSERT INTO db_cuentas( nombre , numero , titular , banco , id_usuario) VALUES ( '', '' , '', '', ${id_usuario})`)
    .then(response => res.json(response.insertId.toString()))
    .catch(err => res.json(err))
})

router.post("/categoria/add", async (req, res) => {

  const { id_usuario } = req.body

  await queryDB(`INSERT INTO Categoria( nombre, tipo, id_usuario) VALUES ( '', '' , '${id_usuario}')`)
    .then(response => res.json(response.insertId.toString()))
    .catch(err => res.json(err))
})


router.post("/cuentas/update", async (req, res) => {

  const { id, nombre, numero, titular, banco } = req.body

  await queryDB(`UPDATE db_cuentas SET  nombre = '${nombre}', numero = '${numero}' , titular = '${titular}' , banco = '${banco}' WHERE id= '${id}' `).then(response => res.json(response))
})

router.post("/categoria/update", async (req, res) => {

  const { id, nombre, tipo } = req.body

  await queryDB(`UPDATE Categoria SET nombre = '${nombre}', tipo = '${tipo}'  WHERE id = '${id}'`).then(response => res.json(response))
})

router.post("/cuentas/delete", async (req, res) => {

  const { id } = req.body

  await queryDB(`DELETE FROM  db_cuentas   WHERE id= '${id}'  `).then(response => res.json(response))
})

router.post("/categoria/delete", async (req, res) => {

  const { id } = req.body

  await queryDB(`DELETE FROM Categoria  WHERE id= '${id}' `).then(response => res.json(response))
})

router.post("/movimiento/save", async (req, res) => {
  const { monto, ID_categoria, ID_cuenta, referencia, fecha, concepto, id_usuario } = req.body
  await queryDB(`INSERT INTO bd_movimiento( monto, ID_categoria, ID_cuenta, referencia, fecha, concepto, id_usuario) VALUES ( '${monto}', '${ID_categoria}','${ID_cuenta}', '${referencia}', '${fecha}', '${concepto}',  '${id_usuario}')`)
    .then(response => res.json(response))
})

router.get("/transacciones", async (req, res) => {
  const token = req.query.token || 0;

  if (token !== 0) {
    selectDB('db_cuentas', `id_usuario = '${token}'`).then(x => {
      mapearCuentas(x).then(r => res.json(r));
    });
  } else {
    res.status(400).send("argumentos invalidos");
  }
})

router.post("/register", (req, res) => {
  const username = req.body.username;
  const clave = req.body.clave;
  const nombre = req.body.nombre;
  const correo = req.body.correo;

  bcrypt.hash(clave, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO  bd_usuario (username, clave, nombre, correo) VALUES (?,?,?,?)",
      [username, hash, nombre, correo],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

router.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const clave = req.body.clave;
  console.log(req.body);
  db.query(
    "SELECT * FROM bd_usuario WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result) {
        bcrypt.compare(clave, result[0].clave, (error, response) => {
          console.log(response, clave);
          if (response) {
            req.session.user = result[0];
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

module.exports = router;
