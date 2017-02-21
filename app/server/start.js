const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
const passport = require('passport')
const compression = require('compression')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const User = require('../api/users/user.model')

app.use(require('./session.middleware'))
app.use(require('./request-state.middleware'))

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

// send all requests to index.html
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public'))
})

app.use(require('./error.middleware'))

// production server, localhost:4444
const PORT = process.env.PORT || 4444
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
