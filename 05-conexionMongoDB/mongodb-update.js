var mongodb = require('mongodb');

//  connection URL
var url = 'mongodb://localhost:27017/nodeExample';

// Connect to the MongoDB server
mongodb.MongoClient.connect(url, function(err, db) {
	if (err) {
		console.log(err);
		process.exit(1);
	}

	// Update a document in myCollection
	db.collection('myCollection').update({x: 1}, {$set: {y: 2}}, function(err, result) {
		if (err) {
			console.log(err);
			process.exit(1);
		}

		console.log("Documento actualizado");

		db.close();
	})
});