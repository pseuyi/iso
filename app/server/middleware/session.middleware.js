'use strict';

var router = require('express').Router();
var session = require('express-session')

var sess = {
  // this mandatory configuration ensures that session IDs are not predictable
  secret: 'mysecret', // or whatever you like
  // these options are recommended and reduce session concurrency issues
  resave: false,
  saveUnitialized: false
}

router.use(session(sess))
router.use(function (req, res, next) {
  //console.log('session', req.session)
  next()
})
// router.use('/', function (req, res, next) {
//   if (!req.session.counter) req.session.counter = 0
//   console.log('counter', ++req.session.counter)
//   next();
// })

module.exports = router;
