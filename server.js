const express = require('express')
const app = express()
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sora'
const UserRouter = require('./routes/user')
const cookieSession = require('cookie-session')

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

app.use(express.json())

app.use(
  cookieSession({
    name: 'local-session',
    keys: ['Sora'],
    maxAge: 24 * 60 * 60 * 1000 //24 hours worth of miliseconds
  })
)

app.use('/user', UserRouter)
app.use(errorHandler)


app.listen(3000, () => {
    console.log('Listening to 3000')
})