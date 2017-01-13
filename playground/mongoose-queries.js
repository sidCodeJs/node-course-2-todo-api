const mongoose = require('./../server/db/mongoose').mongoose;
const {todo} = require('./../server/models/todo');
const user = require('./../server/models/user').user;

const {ObjectID} = require('mongodb');


// var id = '5876d6d1055e1fbacc604a34'

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// todo.find({
//   _id: id
// }).then((todoReturned) => {
//   console.log('Todo found', todoReturned);
// });
//
// todo.findOne({
//   _id: id
// }).then((todoReturnedOne) => {
//   console.log('Todo One found', todoReturnedOne);
// });

// todo.findById(id).then((todoReturnedbyID) => {
//   if(!todoReturnedbyID){
//     return console.log('ID not found');
//   }
//   console.log('Todo found by ID', todoReturnedbyID);
// }).catch((e) => console.log(e));
//

var userID = "5876dc8fd7917e69d002885c";

if(!ObjectID.isValid(userID)) {
  console.log('ID not valid');
} else {

  user.findById(userID).then((user) => {
    if(!user){
      return console.log('ID not found');
    }
    console.log('here is the user record', user);
  }).catch((e) => console.log(e));
}
