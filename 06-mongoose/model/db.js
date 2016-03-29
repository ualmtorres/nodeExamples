// Bring Mongoose into the project
var mongoose = require( 'mongoose' );

// Build the connection string
var dbURI = 'mongodb://localhost/mongoose';

// Create the database connection
mongoose.connect(dbURI);

// Catch connection event
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});

// Catch connection error event
mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

// Catch disconnection event
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

// Catch end Node application event
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});

// Register the user model
require('./userSchema');