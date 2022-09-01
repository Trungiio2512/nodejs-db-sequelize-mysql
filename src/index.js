const express = require('express')
const path = require('path')
require('dotenv').config()

const configViewEngine = require('./config/viewEngine')
const configRoute = require('./routes')
const app = express()
const connectDB = require('./config/connectDB')

const port = process.env.PORT || 3000;

app.use(
    express.urlencoded({
        extended: true,
    })
);
// from js...
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')))

configViewEngine(app)
configRoute(app)

connectDB()

app.listen(port)