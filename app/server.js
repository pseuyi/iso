const express = require('express')
const path = require('path')
const compression = require('compression')
const app = express()
const session = require('express-session')

app.use(session({
  secret: 'mysecretpassy',
  resave: false,
  saveUnitialized: false
}))

// compression middleware
app.use(compression())

// serve static stuff like style.css
app.use(express.static('public'))

// send all requests to index.html
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public'))
})

// production server, localhost:4444
const PORT = process.env.PORT || 4444
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
