// A pure function is a function which given the same input, always returns the same output and produces no side effect
// let a = 4 // external factor it is a impure function

// function add(x){ // this function is an impure functioni
// //     console.log(x+a)
// }

// add(2)

//Pure function 
// this function which do not uses external factor
function addPure(x,a){ //using an external resource
    return x+a 
}

console.log(addPure(4,5))  // this is a complete pure function


