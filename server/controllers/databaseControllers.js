const { response } = require('express');
const { query } = require('../../models/databaseModels');
const path = require('path');
const express = require('express');
const app = express();

//Import bcrypt into file
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const databaseController = {};

app.set('view engine', 'ejs');
// app.use(express.urlencoded());

databaseController.bcrypt = (req, res, next) => {
  const { password } = req.body;
  //Use the Bcrypt function to hash the password with provided amount of salt rounds
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      return res.status(400).send("Error: Unable to store password.");
    }
    //stores the hash function into res.locals
    console.log(hash);
    //console.log(hash);
    res.locals.bcrypt = hash;
    //returns next() that will pass the hashed password to the next middleware function
    return next();
  });
};

databaseController.verifyAccount = (req, res, next) => {
  // write code here
  // const { username, password } = req.body;
  const values = [req.body.username];
  let queryString = "SELECT password FROM account WHERE username = $1;";

    query(queryString, values)
      .then((data) => {
        //If input login password matches the bcrypt hash in the database, return next() to move to next middleware
        if (bcrypt.compareSync(req.body.password, data.rows[0].password)) {
            console.log('Password successfully verified');
            return next();
        }
        console.log('Error: Unable to validate password. Please try again.');
        // console.log(path.resolve(__dirname, '../../client/login'));
        return res.redirect('/');
      })
      .catch((err) => res.redirect('/', {
        error: `databaseController.verifyAccount : ERROR: ${err}`,
        message: { err: 'error occurred in databaseController.verifyAccount'}
      }))
};

databaseController.getAccountID = (req, res, next) => {
  // This middleware to be used after verifyAccount
  const values = [req.body.username];
  let queryString = 'SELECT _id FROM account WHERE username = $1;' 
  query(queryString, values)
      .then(data => {
        //Save the user id in res.locals
        res.locals.accountID = data.rows[0]._id;
        console.log('data.rows is this: ', data.rows[0]._id);
        return next();
      })
      .catch((err) => res.render('../../client/signup', {
        error: `databaseController.addAccount : ERROR: ${err}`,
        message: { err: 'error occurred in databaseController.addAccount'}
      }))
};

databaseController.getItinerary = (req, res, next) => {
  // This middleware to be used after verifyAccount
  const accountID = [res.locals.accountID];
  console.log('You made it to account id: ', accountID);
  let queryString = 'SELECT * FROM itinerary WHERE account_id = $1;' 
  // query(queryString, account)
  //     .then(data => {
  //       console.log(data.rows[0]);
  //       return next();
  //     })
  //     .catch((err) => res.render('../../client/signup', {
  //       error: `databaseController.addAccount : ERROR: ${err}`,
  //       message: { err: 'error occurred in databaseController.addAccount'}
  //     }))
  return next();
};

databaseController.addAccount = (req, res, next) => {
  // write code here
  // const { username, password } = req.body;
  console.log(req.body);
  const password = res.locals.bcrypt;
  const values = [
    req.body.fname,
    req.body.username,
    password,
    req.body.currency,
  ];
  let queryString =
    "INSERT INTO account(name, username, password, currency) VALUES($1, $2, $3, $4) RETURNING _id;";

  query(queryString, values)
    .then((data) => {
      console.log(
        "data inside addAccount middleware",
        console.log(data.rows[0]._id)
      );
      return next();
    })
    .catch((err) =>
      res.render("./../client/signup", {
        error: `databaseController.addAccount : ERROR: ${err}`,
        message: { err: "error occurred in databaseController.addAccount" },
      })
    );
};

databaseController.deleteAccount = (req, res, next) => {};

databaseController.addItinerary = async (req, res, next) => {
  const itineraryValues = [
    [req.body.countryName, req.body.countryCode], //country
    [req.body.hotelName, req.body.hotelPrice], //hotel
    [req.body.flightName, req.body.flightPrice], //flight
  ];

  const queryStrings = [
    "INSERT INTO country(name, currency_code) VALUES($1, $2) RETURNING _id;", //country
    "INSERT INTO hotel(name, price) VALUES($1, $2) RETURNING _id;", //hotel
    "INSERT INTO flight(name, price) VALUES($1, $2) RETURNING _id;", //flight
  ];

  let foreignKeys = [];

  //below creates country, hotel, flight, activity & save their primary key in foreignKeys array
  for (let i = 0; i < queryStrings.length; i++) {
    await query(queryStrings[i], itineraryValues[i])
      .then((data) => {
        foreignKeys.push(data.rows[0]._id);
      })
      .catch((err) =>
        res.render("./../client/signup", {
          error: `databaseController.addAccount : ERROR: ${err}`,
          message: { err: "error occurred in databaseController.addAccount" },
        })
      );
  }

  console.log("CHECK ->>>>>>>>>>>>>>>>>", foreignKeys);

  // below creates itinerary with given foreign keys
  foreignKeys = [...foreignKeys, req.body.accountId];
  const itineraryQueryStrings =
    "INSERT INTO itinerary(country_id, flight_id, hotel_id, account_id) VALUES($1, $2, $3, $4)";

  await query(itineraryQueryStrings, foreignKeys)
    .then((data) => {
      return next();
    })
    .catch((err) =>
      res.render("./../client/signup", {
        error: `databaseController.addAccount : ERROR: ${err}`,
        message: { err: "error occurred in databaseController.addAccount" },
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

databaseController.addActivity = (req, res, next) => {
  //!! Need to persist itinerary id from the request object for the next middleware
  // Add activity name and activity cost from req.body to a new array
  const activity = [req.body.activityName, req.body.activityCost];
  // Query will add activity name and cost to activity table and return its id
  let queryString = 'INSERT INTO activity(name, price) VALUES($1, $2) RETURNING _ID;';
  query(queryString, activity)
      .then(data => {
        console.log(data.rows[0]._id);
        //Save the activity id in res.locals
        res.locals.activityID = data.rows[0]._id;
        return next();
      })
      .catch((err) => res.render('../../client/signup', {
        error: `databaseController.addAccount : ERROR: ${err}`,
        message: { err: 'error occurred in databaseController.addAccount'}
      }))
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
      });
};

// databaseController.deleteItinerary = (req, res, next) => {
//   // write code here
//   const id = req.body;
//   // console.log(id_name, 'us');
//   console.log(id.name, 'dot');
//   const values = Object.values(id);
//   console.log(values)
//   // name, gender, species, species_id, birth_year, eye_color, skin_color, hair_color, mass, height,
//   //homeworld, homeworld_id, films
//   //id.name, id.gender, id.species, id.species_id, id.birth_year, id.eye_color, id.skin_color, id.hair_color, id.mass, id.height, id.homeworld, id.homeworld_id, id.films
//   // console.log(req.body);
//   const newChar = 'INSERT INTO people (name, gender, species, species_id, birth_year, eye_color, skin_color, hair_color, mass, height, homeworld, homeworld_id, films) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);';
//   db.query(newChar, id)
//     .then(results => {
//       res.locals.characters.length = results;
//       next();
//     })
//     .catch(() => {
//       next({
//         log: 'starWarsController.js: Error adding character'
//       });
//     });
// };

module.exports = databaseController;
