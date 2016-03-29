var mongoose = require('mongoose');
var db = require('./model/db');
var User = mongoose.model('User');

// User modified in two steps: findOne() + save()
User.findOne({email: 'johnsmith@mongoose.com'}, function(err, doc) {
	if (err) {
		console.log(err);
		process.exit(1);
	}

	doc.age = 25;

	doc.save(function (err) {
		if (err) {
			console.log(err);
			process.exit(1);
		}
	});

	console.log('User modified');
})


User.update({email: 'marythompson@mongoose.com'}, {$set: {age: 31}}, function(err, docs) {
	if (err) {
		console.log(err);
		process.exit(1);
	}
	console.log("User modified");
});
