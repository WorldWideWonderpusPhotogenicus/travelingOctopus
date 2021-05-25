import React from 'react';
//import { Field, reduxForm, formValueSelector } from 'redux-form';


const FlightComponent = () => {

  // const flight = useSelector(state => state./**/.flight);
  // const dispatch = useDispatch();

  return (
    <div className="tripAspect">
      <div>
        <label>
          <input class="ph" placeholder="How will we get there?" />
          <button></button>
        </label>
      </div>
      <div>
        <label>
          <p>$</p>
          <input class="cost" placeholder="Current Cost" />
          <button></button>
        </label>
      </div>
    </div>
  )
}

export default FlightComponent;