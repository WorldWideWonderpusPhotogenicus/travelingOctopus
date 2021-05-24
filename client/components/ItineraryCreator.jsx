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

    return (
        <div>
            <form method="POST" action='/db/addItinerary'>
                <label>
                    Where would you like to go?
                    <input name="country" type="text" placeholder="addCountry" />
                    <input name="countryCurrency" type="text" placeholder="USD?" />
                </label>
                <br></br>
                <label>
                    What you flying?
                    <input name="flight" type="text" placeholder="flight information" />
                    <input name="flightCost" type="number" placeholder="flight cost" />
                </label>
                <br></br>
                <label>
                    Where you staying?
                    <input name="hotel" type="text" placeholder="hotel name" />
                    <input name="hotelCost" type="number" placeholder="hotel cost" />
                </label>
                <br></br>
                {/* {inputArrays} */}
                <br></br>
                <label>
                    Add Activity
                    <input name="activity" type="text" placeholder ="activity"/>
                    <input name="activityCost" type="number" placeholder="amount" />
                </label>
                {/* <button onClick={setCount(count + 1)}>Add Activity</button>
                <button onClick={setCount(count - 1)}>Delete Activity</button> */}
                <br></br>
                <input type="submit" value="Submit"/>
            </form>
        </div>

    )
}

export default ItineraryCreator;