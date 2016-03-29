var mongoose = require('mongoose');
var User = mongoose.model('User');

var projectSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref:'User'
	}
});

// Build the Project model
mongoose.model('Project', projectSchema);



