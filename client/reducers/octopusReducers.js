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
     test : 'testing',
     country: '',
     flight: '',
     hotel: '',
    //  conversion_Currency : '',
     activities: []
 }


const octopusReducers = (state = initialState, action) => {

  switch (action.type) {
    case 'activity/addAnotherActivity': {
      console.log('dogs')
    }
    default:
      return state;
  }
}
   export default octopusReducers;