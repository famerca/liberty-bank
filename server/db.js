const mysql = require("mysql")
const conn = mysql.createConnection({
  host: "bo0qmwdxk7frdjqezkuw-mysql.services.clever-cloud.com",
  user: "u1pnbraibg0snk3j",
  password: "mhRkNx8XNdh2ntTIsCKk",
  database: "bo0qmwdxk7frdjqezkuw",
  port: "3306"
})

// Ingreso es 1
// Egreso es 0 


const select = (tabla, where = "1") => {
  return new Promise((next, reject) => {

    conn.query(`SELECT * FROM  ${tabla} WHERE ${where}`, (err, res, fields) => {
      if (err) {
        console.log("error:", err);
        reject();
      }
      else {
        console.log(res);
        next(res);
      }
    })

  })
}
const query = (query) => {
  return new Promise((next, reject) => {

    conn.query(query, (err, res, filds) => {
      if (err) {
        console.log("error: ", err);
        reject(err);
      }
      else {
        next(res);
      }
    });

  })
}



module.exports.db = conn;
module.exports.selectDB = select;
module.exports.queryDB = query;

