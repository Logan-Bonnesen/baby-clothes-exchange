const express = require('express')
const router = express.Router()
const { registerUser, authUser, getUser } = require('../controllers/userController')
const auth = require('../middleware/auth')

// register new user
router.post('/register', registerUser)

// authenticate user and get token
router.post('/login', authUser)

// get user info
router.get('/', auth, getUser)

module.exports = router;