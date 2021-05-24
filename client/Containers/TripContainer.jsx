import React from 'react';
//import { createSelector } from 'reselect';
//import { useDispatch, useSelector } from "react-redux"; 
import CountryComponent from '../components/CountryComponent.jsx';
import FlightComponent from '../components/FlightComponent.jsx';
import HotelComponent from '../components/HotelComponent.jsx';
import ActivityComponent from '../components/ActivityComponent.jsx';


function TripContainer() {
  // const count = useSelector(state => state.counter.count);
  // const dispatch = useDispatch();

  return (

    <div>
      <CountryComponent />
      <FlightComponent />
      <HotelComponent />
      <ActivityComponent />
    </div >
  );
};

export default TripContainer;