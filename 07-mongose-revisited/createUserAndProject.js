var mongoose = require('mongoose');
var db = require('./model/db');

var User = mongoose.model ('User');
var Project = mongoose.model('Project');

var john = new User({
	email: 'johndoe@mongoose.com',
	name: 'John Doe'
});

var pamela = new User({
	email: 'pamelasmith@mongoose.com',
	name: 'Pamela Smith'
});

//Project is created by John Doe 
//Project contributors are John Doe and Pamela Smith
var myProject = new Project ({
	name:'Project 1',
	description:'Project 1 Description',
	createdBy: john,
	contributors: [john, pamela]
});

john.save();
pamela.save();
myProject.save();

