const express = require('express')
const router = express.Router()

const homeController = require('../controller/homeController')

router.get('/delete-crud', homeController.deleteCRUD)
router.put('/put-crud/:id', homeController.putCRUD)
router.get('/edit-crud/:id', homeController.getEditCRUD)
router.get('/get-crud', homeController.displayCRUD)
router.post('/post-crud', homeController.postCRUD)
router.get('/crud', homeController.getCreateCRUD)
router.get('/', homeController.show)

module.exports = router