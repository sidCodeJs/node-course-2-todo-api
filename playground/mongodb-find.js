const {MongoClient, ObjectID} = require('mongodb');

const client = new MongoClient();

client.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('unable to connect to the database server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //
    //   console.log('error detected');
    //
    // });

    db.collection('Users').find({name: "Sidhartha"}).count().then((count) => {

      console.log(`Users count with name sidhartha: ${count}`);
    }, (err) => {

      console.log('error detected');

    });

  //  db.close();
});
