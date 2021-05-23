/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */


import * as types from '../constants/actionTypes';

//example action
// export const addCardActionCreator = marketId => ({
//     type: types.ADD_CARD,
//     payload: marketId,
// });

export const addCountry = text => {
  return {
    type: 'country/addCountry',
    payload: text
  }
}

export const deleteCountry = () => {
  return {
    type: 'country/deleteCountry',
    payload: 'button-click?'
  }
}


// https://redux.js.org/tutorials/essentials/part-1-overview-concepts

export const addHotel = text => {
  return {
    type: 'hotel/hotelAdded',
    payload: text
  }
}

export const deleteHotel = () => {
  return {
    type: 'hotel/hotelDeleted',
    payload: 'button-click?'
  }
}


export const addFlight = text => {
  return {
    type: 'flight/flightAdded',
    payload: text
  }
}

export const deleteHotel = () => {
  return {
    type: 'flight/deleteFlight',
    payload: text
  }
}



export const addActivity = text => {
  return {
    type: 'activity/addActivity',
    payload: text
  }
}

export const deleteActivity = () => {
  return {
    type: 'activity/deleteActivity',
    payload: text
  }
}










