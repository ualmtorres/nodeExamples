var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		lowercase: true
	},
	age: {
		type: Number,
		default: 18
	}
});

// Build the User model
mongoose.model('User', userSchema);



