const express = require('express')
const router = express.Router()
const User = require('../models/user')
const isAuthenticated = require('../middlewares/isAuthenticated')

router.get('/:username', (req, res) => {
    const { params: { username } } = req
    User.findOne({ username }, (err, user) => {
        if (user) {
            res.send(`User ${username} exists`)
        } else {
            res.send(`User ${username} does not exist`)
        }
    })
})

router.get('/:username/list', (req, res) => {
    const { params: { username } } = req
    User.findOne({ username }, (err, user) => {
        if (user) {
            if (user.mediaList) {
                res.send(user.mediaList)
            } else {
                res.send(`User ${username} exists but medialist does not`)
            }
        } else {
            res.send(`User ${username} does not exist`)
        }
    })
})

router.post('/add', isAuthenticated, async (req, res) => {
    const { name, author, type, rating, comment } = req.body
    const username = req.session.username
    const media = { name, author, type, rating, comment }
    try {
        const user = await User.findOne({ username })
        user.mediaList.push(media)
        user.save()
        res.send('Media successfully added')
    } catch {
        res.send('Failed to add media')
    }
})

router.post('/edit', isAuthenticated, async (req, res) => {
    const { name, author, type, rating, comment, _id } = req.body
    const username = req.session.username
    const media = { name, author, type, rating, comment }
    try {
        const user = await User.findOne({ username })
        user.mediaList.pull(_id)
        user.mediaList.push(media)
        user.save()
        res.send('Media successfully edited')
    } catch {
        res.send('Failed to edit media')
    }
})

router.post('/delete', isAuthenticated, async (req, res) => {
    const { _id } = req.body
    const username = req.session.username
    try {
        const user = await User.findOne({ username })
        user.mediaList.pull(_id)
        user.save()
        res.send('Media successfully deleted')
    } catch {
        res.send('Failed to delete media')
    }
})

router.post('/signup', async (req, res) => {
    const { username, password } = req.body
    try {
        await User.create({ username, password })
        res.send('Signup sucessful')
    } catch {
        res.send('Signup failed')
    }
})

router.post('/login', (req, res, next) => {
    const { username, password } = req.body
    User.findOne({ username, password }, (err, user) => {
        if (user && !err) {
            req.session.username = username
            req.session.password = password
            res.json({ status: 'OK' })
        } else {
            res.send('Failed to login')
        }
    })
})
 
router.post('/logout', isAuthenticated, (req, res) => {
    req.session.username = ''
    req.session.password = ''
    res.send('Logged out')
    res.json({ status: 'OK' })
})

module.exports = router