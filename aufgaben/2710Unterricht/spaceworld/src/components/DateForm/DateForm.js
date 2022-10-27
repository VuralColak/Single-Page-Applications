import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import moment from 'moment';
import {useState} from 'react'




export default function DateForm({date, setDate}) {


  const [formValue, setFormValue] = useState(date)

  console.log(moment);

  const changeHandler = (event) => {
    console.log(event.target.value);
    setFormValue(event.target.value);
  }

  const clickHandler = (event) => {
    console.log(date);
    setDate(formValue);

  }


  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="dateInput">
            <Form.Label>Wunschdatum</Form.Label>
          <InputGroup>
            <Form.Control type="date" value={formValue} onChange={changeHandler}/>
            <Button variant="outline-secondary" id="button-addon2" onClick={clickHandler}>
              Senden
            </Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}
