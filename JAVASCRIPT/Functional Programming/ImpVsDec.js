// Problem 1:  we will be given a number and we have to check that if the square of that number is even or not

//Imperative way of writing code
// const a = 4
// const c = a*a
// let isEven;
// if(c%2==0){
//     isEven = true
// }
// else{
//     isEven = False
// }

// console.log(isEven)

//Declarative way of writing code

 const chechForSquare = (x)=>(x*x%2 == 0 ? true : false)

 console.log(checkForSquare(4))
