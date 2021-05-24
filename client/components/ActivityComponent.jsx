import React from 'react';
//import { Field, reduxForm, formValueSelector } from 'redux-form';
//import 

const ActivityComponent = () => {

  // const activity = useSelector(state => state.activity);
  // const dispatch = useDispatch();

  return (
    <div className="tripAspect">
      <div className='activity'>
        <div>
          <label>
            <input placeholder="What will we do?" />
            <button></button>
          </label>
        </div>
        <div>
          <label>
            <p>$</p>
            <input placeholder="Current Cost" />
            <button></button>
          </label>
        </div>
      </div>

      {/* buttons: addnew /remove */}
      <div className="inputContainer">
          <label>Add New Activity</label>
          <input className="input-box" />
          {/* <button onClick={addAnotherActivity} className="submit-button">Add Market</button> */}
      </div>
    </div>
  )
}

export default ActivityComponent;



// //
// /* unit 7 */

// // import actionType constants
// import * as types from '../constants/actionTypes';

// export const addCardActionCreator = marketId => ({
//   type: types.ADD_CARD,
//   payload: marketId,
// });

// add more action creators


// next steps for pair programming:
  // pass user data from form field to store (via actions -> dispatch -> stor)


// group programing notes:
// Action creators are functions that generate "action" objects as output.
// Export these action creator functions to the components which need to produce
// an action to dispatch to the reducer.

// When a particular event occurs, handle it by DISPATCHING ACTION --> REDUCER 
// receives action --> SET STATE based on the "type" property of the action object

