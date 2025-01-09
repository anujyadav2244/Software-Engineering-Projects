// higher order function are function that operate on other function, either by taking them as arguments or by returning them. In simple words, A higher-order function is a function that can take another function as an argument, or that returns a function as a result.

// Example 1

// let arr = [1, 2, 3, 4, 5];

// let squareArr =[]

// for(let i = 0; i<arr.length; i++){
//     squareArr.push(arr[i]*arr[i])
// }
// console.log(squareArr)

//map will loop through every elemnt of your array and will performs specific operation that you have defined in the function

//Map method will always return you a new array with your result

// const  num = [1, 2, 3, 4, 5]

// const square = num.map(function(n){
//     return n*n
// })

// console.log(square)

const transaction = [1000,2000,3000,4000,-898,3000,-4500]

const Dollor = 80

let transactionInDollor = transaction.map((amount)=>{
    return amount/Dollor
})

console.log(transactionInDollor)

//forEach method will loop through every element of your array and will perform specific operation that you have defined in the function
//forEach method has small difference between map that map contains return in function and forEach has concole.log in function

let transactionInDollor1 = transaction.forEach((amount)=>{
    console.log(amount/Dollor) 
})

console.log(transactionInDollor1)

