var express = require('express')

var path = require('path')

var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})
app.listen(3000, '192.168.0.100', function () {
  console.log('server started on port 3000')
})
