const express = require('express')
const router = express.Router()

const homeController = require('../controller/homeController')

router.post('/post-crud', homeController.postCRUD)
router.get('/crud', homeController.getCRUD)
router.get('/', homeController.show)

module.exports = router