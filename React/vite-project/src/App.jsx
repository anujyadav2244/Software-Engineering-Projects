import React from 'react';
import Form from './Components/Form';
// import Counter from './Components/Counter';
// import Message from './Components/Message';
// import Fruits from './Components/Fruits';
// import Hello from './Components/Hello';
// import Bye from './Components/Bye'
// import Animals from './Components/Animals'


function App() {
  const seatNumbers = [1,2,6]
  
  return (
    // for using multiple components in an function we need to use react fragment using this symbol 
    // <> components </>
    //we can use div also
    <div>
    {/* <Hello name = 'Parth' phone = '7738673423' seatNumbers = {seatNumbers}/>
    <Hello name = 'Sakshi' phone = '7738673423'/>
    <Hello name = 'Abhi' phone = '7738673423'/>
    <Hello name = 'Paras' phone = '7738673423'/>
    <Hello name = 'Nihar' phone = '7738673423'/> */}
    {/* <Bye /> */}

    {/* <Animals /> */}

    {/* <Fruits  /> */}
    {/* <Message /> */}
    {/* <Counter /> */}

    <Form />
    </div>
  );
}

export default App;
