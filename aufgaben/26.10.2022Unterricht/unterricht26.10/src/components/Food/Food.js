import React from 'react'
import './Food.scss'

export default function Food({food}) {
    console.log(food.name);

    // const imgStyle = {
    //     width: "500px"
    // }
    // bunun yerine Food.css'den style verdik.

    const h3Style = {
        fontSize: "25px"
    }





  return (
    <div className='food-container'>
        <h3 className='hightlighted-headline' style={h3Style}>{food.name}</h3>
        <img className='food-img' src={food.img}></img>
    </div>
  )
}
