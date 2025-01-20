import React , {useState} from 'react'

function Counter() {

    const [count,setCount] = useState(0)
    const [factor,setFactor] = useState(1)

    function increment(){
        setCount(count + factor)
    }

    function decrement(){
        setCount(count - factor)
    }

    function incrementFactor(){
        setFactor( factor + 1)
    }

    function decrementFactor(){
        setFactor( factor - 1)
    }
  return (
    <div>
        <h1>
            This is my counter : {count}
        </h1>
        <button onClick = {increment}>Increment</button>
        <button onClick = {decrement}>Decrement</button>

        <h1>Set my factor {factor}</h1>
        <button onClick = {incrementFactor}>Increment</button>
        <button onClick = {decrementFactor}>Decrement</button>
    </div>
)
}

export default Counter