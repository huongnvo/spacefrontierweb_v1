var express = require('express');
var router = express();

var mongoose = require('mongoose');
var Sample = require('../models/Sample.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Sample.find(function (err, todos) {
		if (err) return next(err);
		res.json(todos);
	});
});

/* POST /todos */
router.post('/', function(req, res, next) {
 	Sample.create(req.body, function (err, post) {
    	if (err) return next(err);
    	res.json(post);
  	});
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  	Sample.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    	if (err) return next(err);
    	res.json(post);
  	});
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  	Sample.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    	if (err) return next(err);
    	res.json(post);
  	});
});

module.exports = router;