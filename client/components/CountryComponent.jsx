import React from 'react';
//import { Field, reduxForm, formValueSelector } from 'redux-form';


export const CountryComponent = () => {

  const country = useSelector(state => state./**/.country);
  const dispatch = useDispatch();

  return (
    <div className="tripAspect">
      <div>
        <label>
          <input placeholder="Where are we going?" />
          <button></button>
        </label>
      </div>
    </div>
  )
}