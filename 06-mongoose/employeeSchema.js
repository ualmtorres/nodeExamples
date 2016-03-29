var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		lowercase: true
	},
	createdOn: {
		type: Date,
		default: Date.now
	}
});

// Build the Employee model
mongoose.model('Employee', employeeSchema);



