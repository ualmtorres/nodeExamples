var mongoose = require('mongoose');
var db = require('./model/db');

var User = mongoose.model ('User');
var Project = mongoose.model('Project');

Project.findOne({name:'Project 1'})
	.populate('createdBy')
	.exec(function(err, result) {	
	if (err) {
		console.log(err);
		process.exit(1);
	}
	console.log(result);
});

