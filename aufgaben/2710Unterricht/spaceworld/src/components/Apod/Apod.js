import React from 'react'
import {useEffect, useState} from 'react'

export default function Apod({date}) {

    const [picture, setPicture] = useState("");

    useEffect(()=>{
        
        const apiKey = "EoYtedjwbk4WhsYN09QEBFsaffFSX9iMi6j45gP3";
        
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setPicture(json)})
        console.log("Das ist der Effect");
        console.log("afterFetch");
    }, [date]);

    console.log("Das ist die Geburt");






  return (
    <>
        <img src={picture.hdurl}>
        </img>
        {console.log("Das ist das Rendering")}
        <h3>{picture.title}</h3>
        <p>{picture.explanation}</p>
    </>
  )
}
