import React from 'react';

function Hello({name , phone , seatNumbers}) { // the name and phone is use as props we can also initialize props only and in return we have to initialize props.name and props.phone

  // let text = 'Parth'

  // function displayName(){
  //   return 'Patel'
  // }

  return (
    <h1>hello  {name} {phone} {seatNumbers}</h1>
  );
}

export default Hello;