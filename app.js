const express = require('express')
const app = express()
const port = 2020
const connectDB = require('./db/connect_db.js')
const bodyParser = require("body-parser")
var session = require('express-session')
var flash = require('connect-flash')

// Connect Database
connectDB()

app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,

}));
app.use(flash());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//  Import Router
const web = require("./routes/web.js")

// Router Load
app.use('/', web)

// ejs setup
app.set('view engine', 'ejs')

// static file
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`server start localhost: ${port}`)
})