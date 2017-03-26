'use strict';
var db = require('./_db')

var Note = require('./api/notes/note.model');
var User = require('./api/users/user.model');

User.hasMany(Note, {foreignKey: 'author_id'})
Note.belongsTo(User, {as: 'author'})

module.exports = db
