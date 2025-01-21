import React from 'react'

function Todo({todo , index , deleteTodo}) {
  return (
    <div className = 'todo'>
          <p>{todo}</p>
          <div className  = 'actions'>
              <input type="checkbox" />
              <button onClick = {()=>deleteTodo(index)}>Delete</button>
          </div>
        </div>
  )
}

export default Todo