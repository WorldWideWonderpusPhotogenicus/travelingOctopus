const { response } = require('express');
const { query } = require('../../models/databaseModels');
//Import bcrypt into file
// const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs');
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
    console.log(hash)
    res.locals.bcrypt = hash;
    //returns next() that will pass the hashed password to the next middleware function
    return next();
  })
}

databaseController.verifyAccount = (req, res, next) => {
    // write code here
    // const { username, password } = req.body;
    const values = [req.body.username];
    let queryString = 'SELECT password FROM account WHERE username = $1;' 

    query(queryString, values)
      .then((data) => {
        console.log(data.rows[0].password)
        console.log(req.body.password)
        console.log(bcrypt.compareSync(req.body.password, data.rows[0].password))
        res.locals.name = { fname :'Sean'};
        return next()
      })
      .catch((err) => res.render('./../client/login', {
        error: `databaseController.verifyAccount : ERROR: ${err}`,
        message: { err: 'error occurred in databaseController.verifyAccount'}
      }))
  };
  
  databaseController.addAccount = (req, res, next) => {
    // write code here
    // const { username, password } = req.body;
    console.log(req.body);
    const password = res.locals.bcrypt; 
    const values = [req.body.fname, req.body.username, password, req.body.currency];
    let queryString = 'INSERT INTO account(name, username, password, currency) VALUES($1, $2, $3, $4);' 

    query(queryString, values)
      .then(data => {
        return next();
      })
      .catch((err) => res.render('./../client/signup', {
        error: `databaseController.addAccount : ERROR: ${err}`,
        message: { err: 'error occurred in databaseController.addAccount'}
      }))
  };
  
  databaseController.deleteAccount = (req, res, next) => {
    // write code here
    const { id } = req.query;
    const values = [id];
    const text = 'SELECT name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population FROM planets WHERE _id=($1);';
   
    db.query(text, values)
      .then(results => {
        res.locals.planets = results.rows[0];
        next();
      })
      .catch(() => {
        next({
          log: 'starWarsController.js: Error retrieving planet info'
        });
      });
  };
  
  databaseController.addItinerary = (req, res, next) => {
    // write code here
  
    next();
  };
  
  databaseController.deleteItinerary = (req, res, next) => {
    // write code here
    const id = req.body;
    // console.log(id_name, 'us');
    console.log(id.name, 'dot');
    const values = Object.values(id);
    console.log(values)
    // name, gender, species, species_id, birth_year, eye_color, skin_color, hair_color, mass, height, 
    //homeworld, homeworld_id, films
    //id.name, id.gender, id.species, id.species_id, id.birth_year, id.eye_color, id.skin_color, id.hair_color, id.mass, id.height, id.homeworld, id.homeworld_id, id.films
    // console.log(req.body);
    const newChar = 'INSERT INTO people (name, gender, species, species_id, birth_year, eye_color, skin_color, hair_color, mass, height, homeworld, homeworld_id, films) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);';
    db.query(newChar, id) 
      .then(results => {
        res.locals.characters.length = results; 
        next();
      })
      .catch(() => {
        next({
          log: 'starWarsController.js: Error adding character'
        });
      });
  };
  
  module.exports = databaseController;
  