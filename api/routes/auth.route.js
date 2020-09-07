const express = require('express')
const router = express.Router()
const passport = require('passport')

const authController = require('../controllers/authController')

router.get('/user', passport.authenticate('jwt', {session: false}), authController.user)

router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router
