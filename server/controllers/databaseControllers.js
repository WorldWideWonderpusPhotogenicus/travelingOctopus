const { response } = require('express');
const { query } = require('../models/databaseModels');
//Import bcrypt into file
const bcrypt = require('bcrypt');
const saltRounds = 10;

const databaseController = {};

databaseController.bcrypt = (req, res, next) => {
  const { password } = req.body;
  //Use the Bcrypt function to hash the password with provided amount of salt rounds
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      return res.status(400).send('Error: Unable to store password.');
    }
    //stores the hash function into res.locals
    res.locals.bcrypt = hash;
    //returns next() that will pass the hashed password to the next middleware function
    return next();
  })
}
