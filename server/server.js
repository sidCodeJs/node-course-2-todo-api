var mongoose = require('./db/mongoose');
var {todo} = require('./models/todo');
var {user} = require('./models/user');

var express = require('express');
var bodyParser = require('body-parser');


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

app.listen(3000, () => {
  console.log('Started pn port 3000');
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
