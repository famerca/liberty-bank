const mysql = require("mysql")
const conn = mysql.createConnection({
  host: "sql5.freesqldatabase.com",
  user: "sql5530096",
  password: "jbXQIreGYh",
  database: "sql5530096",
  port: "3306"
})

// Ingreso es 1
// Egreso es 0 


const select = (tabla, where = "1") =>
  {
    return new Promise( (next, reject) =>{
  
        conn.query(`SELECT * FROM  ${tabla} WHERE ${where}`, (err, res, fields) => {
          if(err)
          {
            console.log("error:", err);
            reject();
          }
          else
          {
            console.log(res);
            next(res);
          }
        })  
    })
  }
const query = (query) =>
  {
    return new Promise( (next, reject) =>{

        conn.query(query, (err, res, filds) => 
        {
          if(err)
          {
            console.log("error: ", err);
            reject(err);
          }
          else
          {
            next(res);
          }
        });

    })
  }



module.exports.selectDB = select;
module.exports.queryDB = query;

