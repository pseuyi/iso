'use strict';

var router = require('express').Router();

router.use('/users', require('./users/user.router'));
router.use('/notes', require('./notes/note.router'));

module.exports = router;
