'use strict'

var Sequelize = require('sequelize')

var db = require('../../_db')

var User = db.define('user', {
  googleId: Sequelize.STRING,
  name: Sequelize.STRING,
  password: Sequelize.STRING,
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = User
