import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import UserContainer from './UserContainer.jsx';
import TripContainer from './TripContainer.jsx';

function MainContainer(){
  //variable?
  //variable?

  const dispatch = useDispatch();

  useEffect(() => {
      fetch('/db/getUserData')
        .then((res) => {
          return res.json();
        })
        .then(data => {
          dispatch({ type: 'UPDATE_USER', payload: data })
        })
        .catch(err => {
          console.log(err)
        })
  }, [dispatch]);


  return (
    <div>
      <UserContainer />
      {/* <TripContainer /> */}
    </div>
  );
};

export default MainContainer; 