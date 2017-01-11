const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('unable to connect to the database server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //   if(err) {
    //     return console.log('Unable to insert todo', err);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    db.collection('Users').insertOne({
      name: 'Sidhartha' ,
      age: 29 ,
      location: 'New York'
    }, (error, result) => {
      if(error)
      {
        return console.log('Unable to insert todo', err);
          }
      console.log(JSON.stringify(result.ops, undefined, 2))
    });

    db.close();
});
