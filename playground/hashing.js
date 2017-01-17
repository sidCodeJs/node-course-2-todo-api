const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(hash);

//
//
// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, 'nonce');
//
// console.log(token);
//
// var decoded = jwt.verify(token, 'no nce');
//
// console.log(decoded);


var password = '123abc!';
//
// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hash = '$2a$10$JrgEoa398oJETtQ3zY7zourriZG7s67W3.ZKCd5prkMGIwDlnQ0VC';

bcrypt.compare(password, hash, (err, res) => {
  console.log(res);
})
