const db = require('../models/index')

const getHomePage = async (req, res, next) => {
    try {
        const data = await db.User.findAll()
        res.render('main.ejs')
    }
    catch (err) {
        console.error(err)
    }
}

module.exports = { getHomePage }