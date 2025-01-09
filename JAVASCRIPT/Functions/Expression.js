// an expression is a set of statements which basically gives the output

// var a = 2+5
// console.log(a)

// var add =  function(a,b){//this function is called anonymous function becaues it is assigned in the variable
//     console.log(a+b)
// }
// add(3,4)

var add =  function(a,b){//this function is called anonymous function becaues it is assigned in the variable
    return a+b
}
var result = add(3,4)
console.log(result)// this function is giving the output using return statement
