const express = require('express')
const { userController } = require('../controller/userContoller')
const router = express.Router()


router.post('/register', userController)


module.exports = router