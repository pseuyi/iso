'use strict';

var app = require('express')();
var path = require('path');
var User = require('../api/users/user.model')
var passport = require('passport')
var session = require('express-session')

var sess = {
  // this mandatory configuration ensures that session IDs are not predictable
  secret: 'mysecret', // or whatever you like
  // these options are recommended and reduce session concurrency issues
  resave: false,
  saveUnitialized: true
}
//app.use(require('./session.middleware'))
app.use(session(sess))

app.use(require('./logging.middleware'))
app.use(require('./request-state.middleware'))
app.use(require('./statics.middleware'))

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function (user, done) {
  done(null, user.id)
});

passport.deserializeUser(function (id, done) {
  User.findById(id)
    .then(function (user) {
      done(null, user)
    })
    .catch(done)
})

app.use('/api', require('../api/api.router'))
app.use('/auth', require('../auth'))

var validFrontendRoutes = ['/', '/notes', '/users', '/notes/:id', '/users/:id', '/signup', '/login']
// var indexPath = path.join(__dirname, 'public')
validFrontendRoutes.forEach(function (stateRoute) {
  app.get(stateRoute, function (req, res) {
    res.sendFile(path.join(__dirname, 'public'))
  })
})

app.use(require('./error.middleware'))

module.exports = app;
