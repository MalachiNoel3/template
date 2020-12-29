


const fs = require('fs')
const session = require('express-session')
const bodyParser = require('body-parser')
const express = require('express');
const ejs = require('ejs')
var urlencodedParser = bodyParser.urlencoded({ extended: false})

const app = express();

const clientPath = `${__dirname}/views`;
console.log(`Serving static from ${clientPath}`)
app.use(express.json({limit: '1mb'}))
app.use(express.static(clientPath));
app.use(session({secret: "secret", resave:false, saveUninitialized: true}))
app.set("view engine", "ejs")

app.get('/', async (req, res) => {
    res.render('index')
})
app.on('error', () => {
    console.error('Server error:', err)
})


app.listen(80, () => {
    console.log('RPS started on 80')
})