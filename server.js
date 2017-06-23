// =================================================================
// Dependencies
// =================================================================
var express = require('express');
var path = require('path');
var methodOverride = require('method-override');

// =================================================================
// Initialize new Express app
// =================================================================
var app = express();

// =================================================================
// Sequelize migrations (DO NOT NEED THESE COMMANDS!!!!)
// =================================================================
var Customers = require('./models')['Customers'];
var Burgers = require('./models')['Burgers'];
Customers.sync();
Burgers.sync();
// =================================================================

// =================================================================
// View engine setup
// =================================================================
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// =================================================================
// Configure page favicon and public web folder
// =================================================================
var favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, 'public/assets/img', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

// =================================================================
// Configure body-parser middleware
// =================================================================
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// =================================================================
// Setup console logger
// =================================================================
var logger = require('morgan');
app.use(logger('dev'));

// =================================================================
// Configure application routes
// =================================================================
app.use(methodOverride('_method'));

var controller = require('./controllers/burgers_controller');
app.use('/', controller);

// Catch 404 errors, forward to error handlers below.
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// =================================================================
// Error handler - development error handler will print stacktrace
// =================================================================
if (app.get('env') === 'development') {
	app.use(function(err, req, res) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// =================================================================
// Error handler - production handler not leaking stacktrace to user
// =================================================================
app.use(function(err, req, res) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;
