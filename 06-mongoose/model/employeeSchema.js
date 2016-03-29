var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
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

mongoose.model('Employee', employeeSchema);



