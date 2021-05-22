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

 import * as types from '../constants/actionTypes';

 const initialState = {
     test : 'testing'
 }

 const octopusReducers = (state = initialState, action) => {

    switch (action.type) {
    //     case types.ADD_MARKET: {
    //         code
    //     }
        default: {
            return state;
      }
    }


 }

 export default octopusReducers;