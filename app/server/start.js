'use strict';

const app = require('express')()
const express = require('express')
const path = require('path')
const db = require('./db')
const User = require('./api/users/user.model')

const session = require('express-session')
const passport = require('passport')
const compression = require('compression')
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(require('./middleware/session.middleware'))
//app.use(require('./middleware/logging.middleware'))
//app.use(require('./middleware/statics.middleware'))
//app.use(require('./middleware/request-state.middleware'))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(function (id, done) {
  User.findById(id)
    .then(function (user) {
      done(null, user)
    })
    .catch(done)
})

// logging middleware
app.use(morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400 }
}))

// body parsing
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// compression middleware
app.use(compression())

// serve static stuff like style.css
app.use(express.static('public'))

app.use('/api', require('./api/api.router'))
app.use('/auth', require('./auth'))

// send all requests to index.html
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public'))
})


// production server, localhost:4444
const PORT = process.env.PORT || 4444

app.listen(PORT, () => {
  console.log('production express server is running at localhost:' + PORT)
  db.sync()
    .then(() => {
      console.log('sick, the pg server is connected')
    })
})

// error middleware
app.use(require('./middleware/error.middleware'))

module.exports = app
