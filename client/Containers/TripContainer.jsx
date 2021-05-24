import React, { useState, useEffect } from 'react';
//import { createSelector } from 'reselect';
import { useDispatch, useSelector } from "react-redux"; 
import CountryComponent from '../components/CountryComponent.jsx';
import FlightComponent from '../components/FlightComponent.jsx';
import HotelComponent from '../components/HotelComponent.jsx';
import ActivityComponent from '../components/ActivityComponent.jsx';
import Trip from '../components/Trip.jsx';


function TripContainer() {
  // const count = useSelector(state => state.counter.count);
  // const dispatch = useDispatch();

  // useEffect (() => {
  //   fetch('/db/getItineraries')
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {

  //     })
  // },[])

  const itinerary = useSelector(state => state.octo.itineraries)
  console.log(itinerary);
  const trips = [];

  for (let i = 0; i < itinerary.length; i++) {
    trips.push( <Trip{...itinerary[i]} key={itinerary[i]._id} /> )
  }

  return (

    <div>
      {trips}
      {/* <CountryComponent />
      <FlightComponent />
      <HotelComponent />
      <ActivityComponent /> */}
    </div >
  );
};

export default TripContainer;