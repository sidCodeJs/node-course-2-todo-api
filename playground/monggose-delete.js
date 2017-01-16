const {mongoose} = require('./../server/db/mongoose');
const {todo} = require('./../server/models/todo');
const user = require('./../server/models/user').user;

const {ObjectID} = require('mongodb');

//todo.remove({}).then((result) => {
// console.log(result);
// }

//todo.findOneAndRemove

todo.findByIdAndRemove('').then((todo) => {
  console.log(todo);
});
