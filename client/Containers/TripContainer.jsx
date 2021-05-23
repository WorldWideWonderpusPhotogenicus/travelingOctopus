import React from 'react';
import { createSelector } from 'reselect';
import { useDispatch, useSelector } from "react-redux";
// import { something } from "something-else";



export const TripContainer = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (

    <div>

      <Country />
      <Flight />
      <Hotel />
      <Activity />

    </div >
  );
};