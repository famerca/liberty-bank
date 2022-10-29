const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config
const path = require('path')

// const connectDB = require('./config/db')

// const pool = require("./config/db")
//conect to data base
// connectDB.then(conn => {
//   conn.query("show tables;").then(tables => {
//     console.log(tables)
//   })

// })

//middleware
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'));


//config
app.set("port", process.env.PORT || 5500)


//routes
app.use("/", require("./routes"))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'))
})

app.listen(app.get('port'), () => {
  console.log(`your app is linstening on port ${app.get('port')}`)
})

