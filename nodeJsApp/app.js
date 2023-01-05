// Application
const express = require('express')
const app = express()
var path = require('path');
app.use(express.static("public"))
const router = express.Router();

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use(connectLiveReload());

// routers
var sportsRouter = require('./routes/sports');
app.use('/sports', sportsRouter);

// controllers
// TODO
app.get('/public/controllers/events.js', function(req, res) { //TODO
  res.type('text/javascript');
  res.sendFile('public/controllers/events.js', { root: '/Users/georg/Desktop/Projects/georgboehm.com/georgboehm.com/nodeJsApp/' });
});

// // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// port
app.listen(process.env.port || 3001);
console.log('Running at Port 3001');

// export router
module.exports = router;
module.exports = app;