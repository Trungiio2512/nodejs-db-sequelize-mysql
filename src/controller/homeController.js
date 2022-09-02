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

//[POST]: /post-crud
const postCRUD = async (req, res, next) => {
    const mess = await serviceCRUD.createUser(req.body)
    console.log(mess)
    return res.send('...')
}
//[GET]: /get-crud

const displayCRUD = async (req, res, next) => {
    const dataUsers = await serviceCRUD.getAllUser()
    console.log(dataUsers)
    res.render('displayCRUD.ejs', {
        users: dataUsers
    })
}


module.exports = { show, getCRUD, postCRUD, displayCRUD }