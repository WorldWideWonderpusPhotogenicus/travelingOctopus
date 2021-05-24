const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const databaseController = require('./controllers/databaseControllers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../build')));

//use for rendering ejs templates, ejs must be rendered.
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  //change return filepath to login screen
  return res.render('../client/login');
});

app.post('/login', databaseController.verifyAccount, databaseController.getAccountID, databaseController.getItinerary, (req, res) => {
  // user attempts to login, verify info is accurate, then redirect to user's home page
  // return res.locals.passwords
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//when user (get) requests signup page, then render signup page
app.get('/signup', (req, res) => {
  res.render('./../client/signup', {error: null});
});

//user posts request on signup page, create user and return 'home' page
app.post('/signup', databaseController.bcrypt, databaseController.addAccount, (req, res) => {
  // when user successfully signs up, need to save account, then redirect them to home page
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//Handles post request to add new activity to itinerary
//Note to populate itinerary_activity table and return all activities associated with the current itinerary id
app.post('/addactivity', databaseController.addActivity, (req, res) => {
  // when user successfully adds an activity, currently just returns status 200 and index.html
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//global error handler
app.use((err, req, res, next) => {
  return res.status(500).send('This is our global error handler message. Yay!');
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})