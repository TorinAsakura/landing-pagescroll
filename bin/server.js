/* eslint-disable no-console */
require('babel-register')
var configureApp = require('../src/server/app').default
var app = configureApp()

app.listen(3000, function(error) {
  if (error) {
    throw error
  }

  console.info('Server listening on port %s', 3000)
})
