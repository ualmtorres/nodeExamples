var mongoose = require('mongoose');
var db = require('./model/db');
var User = mongoose.model('User');

// First way of creating documents: create an instance and save it later
var myUser = new User({
	name: 'Mary Thompson',
	email: 'marythompson@mongoose.com'
})

myUser.save(function (err) {
	if (err) {
		console.log(err);
		process.exit(1);
	}
	console.log('User created');
});

// Second way of creating documents: apply the static method create() to the model
User.create({
	name: 'John Smith',
	email: 'johnsmith@mongoose.com'
}, function(err, user) {
	if (err) {
		console.log(err);
		process.exit(1);
	}
	console.log('User created');
});