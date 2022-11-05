const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 300,
    },
  })
);

const db = mysql.createPool({
  host: "bo0qmwdxk7frdjqezkuw-mysql.services.clever-cloud.com",
  user: "u1pnbraibg0snk3j",
  password: "mhRkNx8XNdh2ntTIsCKk",
  database: "bo0qmwdxk7frdjqezkuw",
  port: "3306"
});

app.post("/register", (req, res) => {
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

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
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

      if (result.length > 0) {
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

app.listen(3001, () => {
  console.log("running server");
});
