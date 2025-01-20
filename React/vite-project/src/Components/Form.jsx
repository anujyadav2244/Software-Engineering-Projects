import React , {useState} from 'react'

function Form() {
    const [name,setName] = useState({firstName : '',lastName : ''})
    
    function handleSubmit(e){
        e.preventDefault()
        console.log(name)
    }
  return (
    <div>
        <h1>{name.firstName} - {name.lastName}</h1>
        <form >
            <label >FirstName : </label>
            <input type="text" value = {name.firstName} onChange={(e)=>setName({... name ,firstName : e.target.value })}  />
            <label >LastName : </label>
            <input type="text"  value = {name.lastName} onChange={(e)=>setName({...name , lastName : e.target.value })}  />
            <button onClick = {(e) => handleSubmit(e)}>Submit</button>
        </form>
    </div>
  )
}

export default Form

// import React, { useState } from 'react';

// function Form() {
//   const [name, setName] = useState({ firstName: '', lastName: '' });

//   return (
//     <div>
//       <form action="">
//         <input
//           type="text"
//           value={name.firstName}
//           onChange={(e) => setName({ ...name, firstName: e.target.value })}
//         />
//         <input
//           type="text"
//           value={name.lastName}
//           onChange={(e) => setName({ ...name, lastName: e.target.value })}
//         />
//         <h1>{name.firstName} {name.lastName}</h1>
//       </form>
//     </div>
//   );
// }

// export default Form;