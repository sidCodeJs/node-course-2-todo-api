const {MongoClient, ObjectId} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('unable to connect to the database server');
    }
    console.log('Connected to MongoDB Server');

db.collection('Todos').findOneAndUpdate(
  {_id: new ObjectId("5876ac2b2e956fbd913dcd1f")},
  {$set: {completed:true}},
  {returnOriginal: false}
).then((result) => {
  console.log(result);
});
  //  db.close();
});
