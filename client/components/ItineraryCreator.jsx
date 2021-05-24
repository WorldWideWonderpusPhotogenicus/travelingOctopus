import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const ItineraryCreator = (props) => {
    // const [count, setCount] = useState(1);

    // const inputArrays = [];

    // useEffect(() => {

    //     for (let i = 0; count < 5; i++) {
    //         inputArrays.push(
    //             <label>
    //         Add Activity
    //         <input name={`activity${i}`} type="text" placeholder ="activity"/>
    //         <input name={`activityCost${i}`} type="number" placeholder="amount" />
    //     </label>
    //     )
    // }
    // },[])

    const handleSubmit = (event) => {
        //event.preventDefault();
        const inputs = event.target.getElementsByTagName("input");
        fetch('/itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        countryName: inputs[0].value,
        countryCode: inputs[1].value,
        flightName: inputs[2].value,
        flightPrice: inputs[3].value,
        hotelName: inputs[4].value,
        hotelPrice: inputs[5].value
        })
    })
    .then(res => console.log(res))
    .catch(err => {
        console.log(err)
    })
}      

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Where would you like to go?
                    <input name="countryName" type="text" placeholder="addCountry" />
                    <input name="countryCode" type="text" placeholder="USD?" />
                </label>
                <br></br>
                <label>
                    What you flying?
                    <input name="flightName" type="text" placeholder="flight information" />
                    <input name="flightPrice" type="number" placeholder="flight cost" />
                </label>
                <br></br>
                <label>
                    Where you staying?
                    <input name="hotelName" type="text" placeholder="hotel name" />
                    <input name="hotelPrice" type="number" placeholder="hotel cost" />
                </label>
                <br></br>
                {/* {inputArrays} */}
                {/* <br></br>
                <label>
                    Add Activity
                    <input name="activity" type="text" placeholder ="activity"/>
                    <input name="activityCost" type="number" placeholder="amount" />
                </label> */}
                {/* <button onClick={setCount(count + 1)}>Add Activity</button>
                <button onClick={setCount(count - 1)}>Delete Activity</button> */}
                {/* <br></br> */}
                <input type="submit" value="Submit" />
            </form>
        </div>

    )
}

export default ItineraryCreator;