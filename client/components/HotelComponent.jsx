import React from 'react';



export const HotelComponent = () => {

  const hotel = useSelector(state => state./** */hotel);
  const dispatch = useDispatch();

  return (
    <div id="tripAspect">
      <div>
        <label>
          <input placeholder="Where will we stay?" />
          <button></button>
        </label>
      </div>
    </div>
  )


}