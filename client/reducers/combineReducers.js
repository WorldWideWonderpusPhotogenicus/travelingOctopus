import { combineReducers } from 'redux';

// import all reducers here
import octopusReducers from './octopusReducers.js';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  octo: octopusReducers,
});

// make the combined reducers available for import
export default reducers;