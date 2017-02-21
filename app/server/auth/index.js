'use strict'

var router = require('express').Router()
var session = require('express-session')
var User = require('../api/users/user.model')
var passport = require('passport')

router.get('/me', function (req, res, next) {
  // console.log('in the me route', req.session.userId)
  let id = req.session.userId
  if (id) {
    User.findById(id)
    .then(user=>{
      res.send(user)
    })
  } else {
    res.sendStatus(401)
  }
})

router.get('/logout', function (req, res, next) {
  console.log('axios get request to auth/logout')
  if(req.session.userId) req.session.userId = null
  console.log('has id been reset?', req.session)
})

router.post('/login', function (req, res, next) {
  User.findOne({
      where: req.body
    })
    .then(function (user) {
      if (!user) {
        res.sendStatus(401)
      } else {
        req.session.userId = user.id
        res.send(user)
      }
    })
    .catch(next)
})

router.post('/signup', function (req, res, next) {
  User.create(req.body)
    .then(user => {
      // res.send(user)
      console.log('the new users id', user.id)
      req.session.userId = user.id
    })
})

// auth/google
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
passport.use(
  new GoogleStrategy({
    clientID: '582139932347-8neg2cpi33kai9t5ufvrbj42l1mtanlk.apps.googleusercontent.com',
    clientSecret: 'urz0iYAVdwt-oS5NXw685D0d',
    callbackURL: '/auth/google/callback'
  },
  // Google will send back the token and profile
  function (token, refreshToken, profile, done) {
    // the callback will pass back user profile information and each service (Facebook, Twitter, and Google) will pass it back a different way. Passport standardizes the information that comes back in its profile object.
    console.log('---', 'in verification callback', profile, '---')

    var info = {
      name: profile.displayName,
      email: profile.emails[0].value,
      photo: profile.photos ? profile.photos[0].value : undefined
    }
    User.findOrCreate({
      where: {googleId: profile.id},
      defaults: info
    })
    .spread(function (user) {
      done(null, user)
    })
    .catch(done)
  })
)

// Google authentication and login
router.get('/google', passport.authenticate('google', { scope: 'email' }))

// handle the callback after Google has authenticated the user
router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/', // or wherever
    failureRedirect: '/' // or wherever
  })
)

module.exports = router
