var mongodb = require('mongodb');

 
//  connection URL
var url = 'mongodb://localhost:27017/nodeExample';

// Connect to the MongoDB server
mongodb.MongoClient.connect(url, function(err, db) {
	if (err) {
		console.log(err);
		process.exit(1);
	}

	// Insert a document in t
	db.collection('myCollection').insert({x: 1}, function(err, result) {
		if (err) {
			console.log(err);
			process.exit(1);
		}

		console.log("Documento insertado");

		db.close();
	})
});