import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function UserContainer(props) {
  //variable?
  //variable?
  //how do I bring in the user name?
  const dispatch = useDispatch();

  useEffect(() => {
      fetch('/db/getName')
        .then((res) => {
          return res.json();
        })
        .then(data => {
          dispatch({ type: 'updateName', payload: data })
        })
        .catch(err => {
          console.log(err)
        })
  }, [dispatch]);

  const firstName = useSelector(state => state.username);

  return (
    <div>
        <div><h1>{firstName}</h1></div>
        <div><h3>9234812A</h3></div>
    </div>
  );
};

export default UserContainer;