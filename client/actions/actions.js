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
// https://redux.js.org/tutorials/essentials/part-1-overview-concepts

export const updateName = (data) => {
  return {
    type: 'types.UPDATE_USER',
    payload: data
  }
}

export const updateCurrency = (data) => {
  return {
    type: 'types.UPDATE_CURRENCY',
    payload: data
  }
}
// export const updateHotel = (text) => {
//   return {
//     type: 'hotel/updateHotel',
//     payload: text
//   }
// }

// export const updateFlight = (text) => {
//   return {
//     type: 'flight/updateFlight',
//     payload: text
//   }
// }

// export const updateActivity = text => {
//   return {
//     type: 'activity/updateActivity',
//     // type: 'ACTIVITY_UPDATE_ACTIVITY',
//     payload: text
//   }
// }

// export const addAnotherActivity = text => {
//   return {
//     type: 'activity/addAnotherActivity',
//     // type: 'ACTIVITY_ADD_ANOTHER_ACTIVITY',
//     payload: text
//   }
// }

// export const removeActivity = text => {
//   return {
//     type: 'activity/removeActivity',
//     // type: 'ACTIVITY_REMOVE_ACTIVITY',
//     payload: text
//   }
// }




// export const getMovie = (movieId) => ({
//   type: types.GET_MOVIE,
//   payload: movieId,
// });






/*
## functionality to add to above if we want an 'add' and an 'update' button.
(add button would be unavailable/unnecessary once an initial trip is declared, so one button functionality as 'update' would make for cleaner presentation)


export const addHotel = text => {
  return {
    type: 'hotel/hotelAdded',
    payload: text
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

 */





/*
## more details to decide: going with new syntax which lists type as 'category/action' instead of a 'SNAKE_CASE_ACTION' and is recommended by react-redux:
https://redux.js.org/tutorials/essentials/part-1-overview-concepts

export const addCountry = text => {
  return {
    type: 'country/addCountry',
    // type: 'COUNTRY_ADD_COUNTRY',
    payload: text
  }
}

export const updateCountry = text => {
  return {
    // type: 'COUNTRY_UPDATE_COUNTRY',
    payload: text
  }
}

export const addFlight = text => {
  return {
    type: 'flight/addFlight',
    // type: 'FLIGHT_ADD_FLIGHT',
    payload: text
  }
}

export const updateFlight = text => {
  return {
    // type: 'FLIGHT_UPDATE_FLIGHT',
    payload: text
  }
}

export const addHotel = text => {
  return {
    type: 'hotel/addHotel',
    // type: 'HOTEL_ADD_HOTEL',
    payload: text
  }
}

export const updateHotel = text => {
  return {
    // type: 'HOTEL_UPDATE_HOTEL',
    payload: text
  }
}

export const addActivity = text => {
  return {
    type: 'activity/addActivity',
    // type: 'ACTIVITY_ADD_ACTIVITY',
    payload: text
  }
}

export const updateActivity = text => {
  return {
    // type: 'ACTIVITY_UPDATE_ACTIVITY',
    payload: text
  }
}

export const addAnotherActivity = text => {
  return {
    type: 'activity/addAnotherActivity',
    // type: 'ACTIVITY_ADD_ANOTHER_ACTIVITY',
    payload: text
  }
}

export const removeActivity = text => {
  return {
    type: 'activity/removeActivity',
    // type: 'ACTIVITY_REMOVE_ACTIVITY',
    payload: text
  }
}

*/
