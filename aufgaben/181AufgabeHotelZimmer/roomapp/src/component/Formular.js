import React from 'react'
import {useState} from 'react'
import "./Form.css";




export default function Formular() {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        arrivalDate: "",
        departureDate: ""
      });
    
      
      const handleInput = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };


      const handleButton = (event) => {
        event.preventDefault();
        console.log(values);
        setValues({
            firstName: "",
            lastName: "",
            arrivalDate: "",
            departureDate: ""
        });
      };


  return (
    <div className='form'>
        <form className='requestForm' onSubmit={handleButton}>
            <h1 className='formTitle'>Request Form</h1>
            <div className='formName'>
                <input className='firstName' type="text" placeholder='First Name' onChange={handleInput} value={values.firstName} name="firstName"></input>
                <input className='lastName' type="text" placeholder='Last Name' onChange={handleInput} value={values.lastName} name="lastName"></input>
            </div>
            <div className='formDate'>
                <input className='arrivalDate' type="date" placeholder='Arrival Date' onChange={handleInput} value={values.arrivalDate} name="arrivalDate"></input>
                <input className='departureDate' type="date" placeholder='Departure Date' onChange={handleInput} value={values.departureDate} name="departureDate"></input>
            </div>
            <button className='formButton' type='Submit'>Send</button>
        </form>
    </div>
  )
}
