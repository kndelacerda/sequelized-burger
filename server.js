// Dependencies
var express = require("express");
var methodOverride = require("method-override");
var path = require("path");
// var db = require("./models");

// Initialize Express App
var app = express();

// View Engine Set Up
var exphbs = require("express-handlebars");
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// // Favicon & public web server
// var favicon = require('serve-favicon');
// app.use(favicon(path.join(__dirname, 'public/assets/img', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

// Body-parser Set Up
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Console Logger Set Up
var logger = require("morgan")
app.use(logger("dev"));

// Application Routes
app.use(methodOverride('_method'));

var controller = require("./controllers/burgers_controllers");
app.use('/', controller);

// Catch errors and forward them to the below error handlers
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handler - development error handler will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// Error handler - production handler not leaking stacktrace to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;