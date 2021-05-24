import React from 'react';
//import { Field, reduxForm, formValueSelector } from 'redux-form';


const FlightComponent = () => {

  // const flight = useSelector(state => state./**/.flight);
  // const dispatch = useDispatch();

  return (
    <div className="tripAspect">
      <div>
        <label>
          <input placeholder="How will we get there?" />
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
  )
}

export default FlightComponent;