var mongoose = require('mongoose');
var db = require('./model/db');
var User = mongoose.model('User');

User.find({email: 'johnsmith@mongoose.com'}, function(err, docs) {
	if (err) {
		console.log(err);
		process.exit(1);
	}
	console.log(docs);
});