const express = require('express');
const methodOverride = require('method-override')
const configViewEngine = (app) => {
    app.use(express.static('./src/public'))
    app.set('view engine', 'ejs');
    app.set('views', 'src/views')
    app.use(methodOverride('_method'))
}

module.exports = configViewEngine