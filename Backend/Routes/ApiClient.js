const express = require('express')

const ClientControllerAPI = require('../Controller/ApiUserController')
const router = new express.Router()

//?     Create-User
router.post('/signup', ClientControllerAPI.signUp)

module.exports = router