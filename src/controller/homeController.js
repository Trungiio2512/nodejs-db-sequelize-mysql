const db = require('../models/index')
const serviceCRUD = require('../service/serviceCRUD')

//[GET]: /
const show = (req, res, next) => {
    return res.render('index.ejs')
}

//[GET]: /crud
const getCRUD = (req, res, next) => {
    return res.render('crud.ejs')
}

const postCRUD = async (req, res, next) => {
    const mess = await serviceCRUD.createUser(req.body)
    console.log(mess)
    return res.send('...')
}


module.exports = { show, getCRUD, postCRUD }