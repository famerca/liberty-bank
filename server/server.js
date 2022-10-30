const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config
const path = require('path')

//middleware
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(express.json())


//config
app.set("port", process.env.PORT || 5020)


//routes
app.use("/", require("./routes"))


// console.log(path.resolve(__dirname, '..', 'public'))
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public/index.html'))
})

app.listen(app.get('port'), () => {
  console.log(`your app is linstening on port ${app.get('port')}`)
})

