var express = require('express')
var app = express()
app.get('/books', function (req, res) {
  require('fs').readFile(process.argv[3], 'utf-8', function (err, data) {
    if (err) throw err
    res.json(JSON.parse(data.toString()))
  })
})
app.listen(process.argv[2])
