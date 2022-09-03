const db = require('../models/index')
const serviceCRUD = require('../service/serviceCRUD')

//[GET]: /
const show = (req, res, next) => {
    return res.render('index.ejs')
}

//[GET]: /crud
const getCreateCRUD = (req, res, next) => {
    return res.render('crud.ejs')
}

//[POST]: /post-crud
const postCRUD = async (req, res, next) => {
    try {
        const mess = await serviceCRUD.createUser(req.body)
        return res.redirect('back')

    } catch (err) {
        return res.send(err)
    }

}
//[GET]: /get-crud

const displayCRUD = async (req, res, next) => {
    const dataUsers = await serviceCRUD.getAllUser()
    res.render('displayCRUD.ejs', {
        users: dataUsers
    })
}

//[GET]: /edit-crud/:id

const getEditCRUD = async (req, res) => {
    console.log(req)
    const userId = req.params.id
    if (userId) {
        const dataUser = await serviceCRUD.getUserById(userId)
        if (dataUser) {
            return res.render('editCRUD.ejs', {
                user: dataUser
            })
        }
        else {
            return res.send('cant not found user')
        }
    }
    else {
        return res.send('cant not get user with id ' + dataUser)
    }
}

//[PUT]: /put-crud/:id?_method=PUT
const putCRUD = async (req, res) => {
    await serviceCRUD.updateUser(req.params.id, req.body)
    res.redirect('/get-crud')
}


//[DELETE]: /delete-crud?:id
const deleteCRUD = async (req, res) => {
    const hasDeleteUser = await serviceCRUD.deleteUser(req.query.id)
    if (hasDeleteUser) {
        res.send(hasDeleteUser)
    }
    else {
        res.send('not found user or not delete user')
    }
}

module.exports = { show, getCreateCRUD, postCRUD, displayCRUD, getEditCRUD, putCRUD, deleteCRUD }