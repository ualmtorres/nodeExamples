var mongoose = require('mongoose');
var db = require('./model/db');
var Employee = mongoose.model('Employee');

Employee.create({
	name: 'Michael',
	email: 'mn@series.com'
}, function(err, employee) {});
