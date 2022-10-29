const mariadb = require("mariadb")
const pool = mariadb.createPool({
  host: "sql5.freesqldatabase.com",
  user: "sql5530096",
  password: "jbXQIreGYh",
  database: "sql5530096",
  port: "3306"
})



const select = (tabla, where = "1") =>
  {
    return new Promise( next =>{

      pool.getConnection()
      .then(conn => {
  
        conn.query(`SELECT * FROM  ${tabla} WHERE ${where}`)
          .then((rows) => {
            console.log(rows);
            next(rows);
          });
          
      }).catch(err => {
        console.log("no se conecto");
      });
    })
  }
const query = (query) =>
  {
    return new Promise( next =>{

      pool.getConnection()
      .then(conn => {
  
        conn.query(query)
          .then((res) => {
            console.log(rows);
            next(res);
          }).catch(err => console.log('Error:',err));
          
      }).catch(err => {
        console.log("no se conecto");
      });
    })
  }




module.exports.selectDB = select;
module.exports.queryDB = query;

