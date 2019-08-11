const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
	if(err) {
		console.log('Unable to connect to MongoDb server....');
	}
	console.log('Connected to MongoDB server...');

	// deleteMany
	db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=>{
		console.log(result);
	});
	// deleteOne
	// db.collection('Todos').deleteOne({text : 'Something to do'}).then((result)=>{
	// 	console.log(result);
	// });
	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
	// 	console.log(result);
	// });

	// db.close();
});