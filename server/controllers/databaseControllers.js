const { response } = require('express');
const { query } = require('../models/databaseModels');

const databaseController = {};

databaseController.verifyAccount = (req, res, next) => {
    // write code here
    let queryString = '';
    const { username, password } = req.body;

    query({ username: username, password: password }, (err, users) => {

    if (users.length === 0) {
      return res.redirect('/signup');
    } else {
      res.locals.currentUser = users;
      return next();
    } 
  })
  };
  
  databaseController.addAccount = (req, res, next) => {
    // write code here
    const { username, password } = req.body;

    User.create({ username, password })
    // console.log('GOT TO HERE!');
      .then(data => {
        return next();
      })
      .catch((err) => res.render('./../client/signup', {
        error: `userController.createUser : ERROR: ${err}`,
        message: { err: 'error occurred in userController.createUser'}
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
  
  starWarsController.addItinerary = (req, res, next) => {
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
  
  module.exports = starWarsController;
  