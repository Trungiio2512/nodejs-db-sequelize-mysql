const home = require('./home')
const configRoute = (app) => {
    app.use('/', home)
}

module.exports = configRoute