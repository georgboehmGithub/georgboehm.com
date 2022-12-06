

var express = require("express");
var app = express();
const port = 3000
const path = require('path')
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
