const express = require('express')
const app = express()

app.set('etag', false)

app.get('/', (req, res, next) => {
  res.send('훌륭해요! ' + Math.random())
}),

app.use('/hello', require('./hello')),

app.use('/mysql', require('./mysql')),

app.use('/userlist', require('./userlist'))








module.exports = {
  path: '/api',
  handler: app
}