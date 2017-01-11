const {MongoClient, ObjectId} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('unable to connect to the database server');
    }
    console.log('Connected to MongoDB Server');

// db.collection('Todos').deleteMany({text: 'evening snacks'}).then((result)=> {
//   console.log(result);
// });

// db.collection('Todos').deleteOne({text: 'eat dinner'}).then((result)=> {
//   console.log(result);
// });

// db.collection('Todos').findOneAndDelete({'completed': false}).then((result)=> {
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({'_id': new ObjectId("5876645f8412ee84621c036a")}).then((result)=> {
  console.log(result);
});


  //  db.close();
});
