const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config
const path = require('path')

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");



//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.resolve(__dirname, '..', 'build')));
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

