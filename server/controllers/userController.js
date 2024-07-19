const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// register new user
exports.registerUser = async (req, res) => {
    const { email, password, location } = req.body;
    try {
        let user = await User.findOne({ email })
        if (user) {
           return res.status(400).json({ msg: 'User already exists' }) 
        }
        user = new User({ email, password, location });
        await user.save()
        const payload = { user: { id: user.id } }
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json({ token })
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
}

// authenticate user and get token
exports.authUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' })
        }
        const payload = { user: { id: user.id } }
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000}, (err, token) => {
            if (err) throw err
            res.json({ token })
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
    }
}

// get user info
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
}