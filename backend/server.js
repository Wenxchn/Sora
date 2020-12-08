const express = require('express')
const app = express()
const path = require('path')

const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sora'
const UserRouter = require('./routes/user')
const cookieSession = require('cookie-session')
const isAuthenticated = require('./middlewares/isAuthenticated')

const errorHandler = (err, req, res, next) => {
  if (err) {
    res.status(500)
    res.send('Something bad occurred')
  }
    next()
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.static('dist'))
app.use(express.json())

app.use(
  cookieSession({
    name: 'local-session',
    keys: ['Sora'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours worth of miliseconds
  })
)

app.post('/isAuthenticated', isAuthenticated, (req, res) => {
  res.json({ user: req.session.username })
})

app.use('/user', UserRouter)
app.use(errorHandler)

app.get('/favicon.ico', (_, res) => res.status(404).send())
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(3000, () => {
    console.log('Listening to 3000')
})