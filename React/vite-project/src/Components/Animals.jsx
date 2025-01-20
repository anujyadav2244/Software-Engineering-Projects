import React from 'react'

function Animals() {
    let animals = ['Cat', 'Dog','Elephant','Lion','Tiger']
  return (
    // <div>{animals.map(animal => 
    // <h1>{animal}</h1>
    // )}
    // </div>
    
    <div>
        <ol>
            {animals.map(animal => 
            <li>{animal}</li>
            )}
        </ol>
    </div>
  )
}

export default Animals