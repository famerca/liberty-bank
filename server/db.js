const mariadb = require("mariadb")
const pool = mariadb.createPool({
  host: "sql5.freesqldatabase.com",
  user: "sql5530096",
  password: "jbXQIreGYh",
  database: "sql5530096",
  port: "3306"
})


class DB 
{
  static select(query)
  {
    return new Promise( next =>{

      pool.getConnection()
      .then(conn => {
  
        conn.query(query)
          .then((rows) => {
            next(rows);
          })
          
      }).catch(err => {
        console.log("no se conecto");
      });
    })
  }

}


module.exports = DB;

