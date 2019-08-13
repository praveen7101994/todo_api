// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
	if(err) {
		console.log('Unable to connect to MongoDb server....');
	}
	console.log('Connected to MongoDB server...');

	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID("5d4fdc986a46991584010d59")
	}, {
		$set: {
			completed: false
		}
	}, {
		returnOriginal: true
	}).then((result)=>{
		console.log(result);
	});

	// db.close();
});