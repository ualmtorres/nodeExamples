var mongodb = require('mongodb');

//  connection URL
var url = 'mongodb://localhost:27017/nodeExample';

// Connect to the MongoDB server
mongodb.MongoClient.connect(url, function(err, db) {
	if (err) {
		console.log(err);
		process.exit(1);
	}

	// Find documents in myCollection
	db.collection('myCollection').find({x: 1}).toArray(function(err, docs) {
		if (err) {
			console.log(err);
			process.exit(1);
		}

		console.log(docs);

		db.close();
	})
});