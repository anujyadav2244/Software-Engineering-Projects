import React from 'react';

function Fruit({ name, price, quantity }) {
  return (
    
    //   <li>The price of {name} is {price} and it is {quantity}. </li>

    <li>{price > 80 ? <h3>The price of {name} is {price} and it has {quantity}</h3> : " "}</li>
    
  );
}



export default Fruit;