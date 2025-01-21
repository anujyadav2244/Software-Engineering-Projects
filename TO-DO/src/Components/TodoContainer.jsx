import React from 'react'
import Todo from './Todo'
function TodoContainer({todos , deleteTodo}) {
  return (
    <div className = 'container'>
        {todos.map((todo , index)=>{
            return(
                <Todo todo = {todo}index = {index} deleteTodo = {deleteTodo}/>
            )
        })}
    </div>
  )
}

export default TodoContainer