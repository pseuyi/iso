'use strict';
import db from './_db'

import Note from './api/notes/note.model'
import User from './api/users/user.model'

User.hasMany(Note, {foreignKey: 'author_id'})
Note.belongsTo(User, {as: 'author'})

export default db
