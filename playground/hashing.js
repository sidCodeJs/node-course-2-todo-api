const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');


// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(hash);

var data = {
  id: 10
};

var token = jwt.sign(data, 'nonce');

console.log(token);

var decoded = jwt.verify(token, 'no nce');

console.log(decoded);
