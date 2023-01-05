
var express = require('express');
const querySingleCol = require("../public/models/database");
var router = express.Router();

router.get('/', function(req, res){
  res.render(view = "sports")
})

router.get('/database', async (req, res) => {
  const category = req.query.category

  // Connect to database using the selected option
  // ...
  console.log("Database: ", category)
  const result = await querySingleCol(category)
  console.log("RESULT IN SPORTS.JS: ", result)
  res.send(result)
  // TODO: Once you have Result, execute plotting in plot script which you give to sports.jade and update the div
  //plot(result)
});

module.exports = router;

