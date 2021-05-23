import React from 'react';
//import { Field, reduxForm, formValueSelector } from 'redux-form';


export const ActivitiesComponent = () => {

  const activity = useSelector(state => state.activity);
  const dispatch = useDispatch();

  return (
    <div className="tripAspect">
      <div>
        <label>
          <input placeholder="What will we do?" />
          <button></button>
        </label>
      </div>
    </div>
  )
}