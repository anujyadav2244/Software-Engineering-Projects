import React from 'react'
import Fruit from './Fruit'


function Fruits() {
    let fruits  = [
        {name: 'Apple',price : 100,quantity : 10},
        {name: 'Mango',price : 150,quantity : 15},
        {name: 'Orange',price : 60,quantity : 8},
    ]
  return (
    <div>{fruits.map(fruit => (
        <Fruit key = {fruit.name} name = {fruit.name} price = {fruit.price} quantity = {fruit.quantity}/>
    ))}</div>
  )
}
export default Fruits