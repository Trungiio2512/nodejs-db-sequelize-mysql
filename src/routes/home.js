const express = require('express')
const router = express.Router()

const homeController = require('../controller/homeContolle')

router.get('/', homeController.getHomePage)

module.exports = router