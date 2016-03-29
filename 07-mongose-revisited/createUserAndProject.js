var mongoose = require('mongoose');
var db = require('./model/db');

var User = mongoose.model ('User');
var Project = mongoose.model('Project');

User.create({
	email: 'johndoe@mongoose.com',
	name: 'John Doe'
}, function(err) {

	User.findOne({email: 'johndoe@mongoose.com'}, function (err, doc) {
		if (err) {
			console.log(err);
			process.exit(1);
		}

		Project.create({
			name: 'Project 1',
			description: 'Project 1 Description',
			createdBy : doc._id
		});
	});
}
);

