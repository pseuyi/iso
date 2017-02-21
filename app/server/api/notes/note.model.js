'use strict'

const Sequelize = require('sequelize')

const db = require('../../_db')

const Note = db.define('note', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  text: Sequelize.TEXT
})

module.exports = Note
