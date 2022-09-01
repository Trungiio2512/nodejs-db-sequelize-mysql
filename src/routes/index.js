const express = require('express')
const home = require('./home')
const router = express.Router()

const configRoute = (app) => {
    app.use('/', home)
}

module.exports = configRoute