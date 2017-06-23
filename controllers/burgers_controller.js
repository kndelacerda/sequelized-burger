// =================================================================
// Dependencies
// =================================================================
var express = require('express');
var router = express.Router();

var burgers = require('../models')['Burgers'];
var customers = require('../models')['Customers'];

// =================================================================
// Routes
// =================================================================
/**
 * GET - home page route rendering index.handlebars
 */
router.get('/', function(req, res) {
	burgers.findAll({
		attributes: {
			exclude: ['created_at', 'updated_at']
		},
		include: [{
			model: customers,
			attributes: {
				exclude: ['created_at', 'updated_at']
			}
		}]
	}).then(function(results) {
		return res.render('index', { burgers : results });
	});
});

/**
 * GET - Redirects traffic from /burgers to home page route.
 */
router.get('/burgers', function(req, res) {
	return res.redirect('/');
});

/**
 * POST - Used to create new burger entry.
 * Requires valid burger and devoured values.
 * Redirects to home page routes upon completion.
 */
router.post('/burgers', function(req, res) {
	var burgerName = req.body.burger;
	var devoured = req.body.devoured;

	burgers.build({
		name : burgerName,
		devoured : devoured })
	.save()
	.then(function(result) {
		return res.redirect('/');
	}).catch(function(error) {
		return res.render('error', {
	  		message: error.message,
	  		error: error
		});
	});
});

/**
 * PUT - Using method-override, updates burger data entry.
 * Requires valid burger_id and devoured values.
 * Redirects to home page routes upon completion.
 */
router.put('/burgers/update/:id', function(req, res) {
	var burgerId = req.params.id;
	var devoured = req.body.devoured;
	var customerName = req.body.customer;

	customers.findOrCreate({
		where: { name: customerName }
	}).spread(function(customer, created) {

		console.log("CUSTOMER: ", JSON.stringify(customer, null, 2));
		console.log("CREATED: ", created);
		console.log("CUSTOMER ID: ", customer.getDataValue('id'));

		burgers.update({
			devoured : devoured,
			customer_id : customer.getDataValue('id')
		}, {
			fields: [ 'devoured', 'customer_id' ],
			where: { id : burgerId }
		}
		).then(function(result){
			return res.redirect('/');
		}).catch(function(error) {
			return res.render('error', {
				message: error.message,
				error: error
			});
		});
	}).catch(function(error) {
		return res.render('error', {
			message: error.message,
			error: error
		});
	});
});

/**
 * DELETE - Using method-override, deletes burger data entry.
 * Requires valid burger_id value.
 * Redirects to home page routes upon completion.
 */
router.delete('/burgers/update/:id', function(req, res) {
	var burgerId = req.params.id;

	burgers.findById(burgerId)
	.then(function(burger) {
		return burger.destroy();
	}).then(function() {
		return res.redirect('/');
	}).catch(function(error) {
		return res.render('error', {
	  		message: error.message,
	  		error: error
		});
	});
});

module.exports = router;
