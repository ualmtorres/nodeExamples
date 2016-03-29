var mongoose = require('mongoose');
var schema = require('./userSchema.js');

mongoose.connect('mongodb://localhost:27017/mongoose');

var User = mongoose.model('User', schema);

User.findOne({email: 'johndoe@mongoose.com'}, function(err, doc) {
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

	console.log('Usuario modificado');
})

