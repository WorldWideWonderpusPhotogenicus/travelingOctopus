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
      let newUsername = state.username;
      let newId = state.id; 
      let newItineraries = [];
      const allItineraries = action.payload;
      
      newUsername = action.payload[0].name;
      
      for (let i = 0; i < allItineraries.length; i++) {
        
      }
      

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