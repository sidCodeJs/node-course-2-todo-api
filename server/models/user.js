const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');


var userSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: (value) => {
        return validator.isEmail(value);
      },
      message: '{VALUE} is not a valid email'
    }
  },
  age: {
    type: Number,
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [
    {
      access: {
        type: String,
        required: true
        },
      token: {
        type:String,
        required: true
        }
    }
  ]
})

userSchema.methods.toJSON = function () {

  var user = this;
  var userObject = user.toObject();
  return _.pick(userObject, ['_id','email','name']);
}

userSchema.methods.generateAuthToken = function() {
var user = this;
var access = 'auth';
var token = jwt.sign({_id: user._id.toHexString(), access}, 'salt123').toString();
  user.tokens.push({access, token});
  return user.save().then(() => {
    return token;
  })
};

userSchema.statics.findByToken = function (token) {
  var userModel = this;
  var decoded;

  try {
    decoded = jwt.verify(token, 'salt123')
  } catch (e) {
      // return new Promise((resolve,reject) => {
      //   reject();
      return Promise.reject();

  }
  return userModel.findOne({ _id: decoded._id, 'tokens.token': token, 'tokens.access': 'auth' });
};

userSchema.pre('save', function (next) {
  var user = this;
  if(user.isModified('password')) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      next();
    });
  });
} else {
      next();}
})

var user = mongoose.model('user', userSchema);

module.exports = {
  user
}
