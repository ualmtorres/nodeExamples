var mongoose = require('mongoose');
var schema = require('./userSchema.js');

mongoose.connect('mongodb://localhost:27017/mongoose');

var User = mongoose.model('User', schema);

var user = new User({
	name: 'John Doe',
	email: 'johndoe@mongoose.com'
});

user.save(function (err) {
	if (err) {
		console.log(err);
		process.exit(1);
	}

	console.log('Usuario almacenado');

	User.find({email: 'johndoe@mongoose.com'}, function(err, docs) {
		if (err) {
			console.log(err);
			process.exit(1);
		}
		console.log(docs);
	})
})