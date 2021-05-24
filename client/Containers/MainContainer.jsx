import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import UserContainer from './UserContainer.jsx';
import TripContainer from './TripContainer.jsx';


function MainContainer(){
  //variable?
  //variable?

  const dispatch = useDispatch();

  useEffect(() => {
      fetch('/homepage/getItinerary')
        .then((res) => {
          console.log(res)
          return res.json();
        })
        .then(data => {
          console.log(data);
          dispatch({ type: 'UPDATE_USER', payload: data })
        })
        .catch(err => {
          console.log(err)
        })
  }, [dispatch]);


  return (
    <div>
      <UserContainer />
      <TripContainer />
    </div>
  );
};

export default MainContainer; 