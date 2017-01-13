const mongoose = require('./db/mongoose');
const {todo} = require('./models/todo');
const {user} = require('./models/user');
const {ObjectID} = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
var todo1 = new todo ({
  text: req.body.text,
  completed: req.body.completed
});
todo1.save().then((doc) => {
console.log('Saved todo', doc);
res.send(doc);
}, (e) => {
console.log('Unable to save todo');
res.status(400).send(e);
});
});

app.get('/todos', (req, res) => {
  todo.find().then().then((todos) => {
    res.send({todos});
  }, (e) => {

  response.status(400).send(e);
});
});

app.get('/todos/:id', (req, res) => {
var todoID = req.params.id;
if(!ObjectID.isValid(todoID)) {
  res.status(404).send('Please check the ID. It is not valid');
} else {
  todo.findById(todoID).then((todo) => {
    if(!todo){
      res.status(404).send('No todo found for this ID');
    }
    res.status(200).send(todo);
  }).catch((e) => res.status(400).send(''));
}

});

app.listen(port, () => {
  console.log(`Started pn port ${port}`);
});

//
//
// var user1 = new user({
// name: 'sid',
// email: '    sidharthchauhan@gmail.com',
// age: 29
// });
//
// user1.save().then((doc) => {
// console.log('Saved User: ', doc);
// }, (e) => {
// console.log('Unable to save todo')
// });

// var todo1 = new todo({
// text: 'cook dinner'
// });

// var todo2 = new todo({
// text: 'make music',
// });
//
// todo2.save().then((doc) => {
// console.log('Saved todo', doc);
// }, (e) => {
// console.log('Unable to save todo')
//});
