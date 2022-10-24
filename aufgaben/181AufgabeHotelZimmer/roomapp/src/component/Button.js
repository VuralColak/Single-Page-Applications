import React from 'react'
import {useState, useEffect} from "react"


export default function Button({roomNr}) {
    const [checkedIn, setCheckedIn] = useState(false);
    useEffect(() => {
        if (checkedIn) {
            alert(`Zimmer NR. ${roomNr} ist nun belegt.`)
        }
    
    }, [checkedIn]);
    
    const clickHandler = (event) => {
        console.log(event);
        setCheckedIn(!checkedIn);
        console.log(checkedIn);
    };

  return (
    <div>
        <button onClick={clickHandler}>Check In</button>
    </div>
  )
}
