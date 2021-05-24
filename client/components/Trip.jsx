import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const Trip = (props) => {


    return (
        <div>
            <strong>{props.country_name} Trip</strong> 
            <br></br>
            <br></br> 
            <p>{props.hotel_name} ${props.hotel_price}</p>
            <p>{props.flight_name} ${props.flight_price}</p>
        </div>
    )
}

export default Trip;
