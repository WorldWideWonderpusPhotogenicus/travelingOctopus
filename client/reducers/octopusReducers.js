/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

 //import * as types from './actions/actions.js';

 const initialState = {
     id: '',
     country: '',
     username: '',
     hotel: '',
    //  conversion_Currency : '',
     currencyExchange: [],
     itineraries: []
 }


const octopusReducers = (state = initialState, action) => {

  switch (action.type) {
    case 'UPDATE_USER': {
      let newUsername = username;
      let newId = id; 
      
      newUsername = action.payload;

      return {
        ...state,
        username: newUsername,
      }
    }
    default:
      return state;
  }
}
   export default octopusReducers;