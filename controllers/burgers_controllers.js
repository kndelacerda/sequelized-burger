// Dependencies 
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// Routes
router.get('/', function(req, res) {
    burger.allBurgers(function(data) {
        res.render('index', { burgers: data });
    });
});

router.get('/burgers', function(req, res) {
    res.redirect('/');
});

router.post('/burgers', function(req, res) {
    var cols = ['burger_name', 'devoured'];
    var vals = [req.body.burger, req.body.devoured];

    burger.saveBurger(cols, vals, function(result) {
        res.redirect('/');
    });
});

router.put('/burgers/update/:id', function(req, res) {
    var condition = 'id=' + req.params.id;
    var objColVals = { devoured: req.body.devoured };

    burger.devourBurger(objColVals, condition, function() {
        res.redirect('/');
    });
});

router.delete('/burgers/update/:id', function(req, res) {
    var condition = 'id=' + req.params.id;

    burger.trashBurger(condition, function() {
        res.redirect('/');
    });
});

module.exports = router;