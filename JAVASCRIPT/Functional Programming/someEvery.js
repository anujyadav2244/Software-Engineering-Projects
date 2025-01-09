// some method
// Some: Condition check: To get true or false based on condition it will return true if even 1 element satisfies the condition

// const transaction = [-1000,-2000,3000,-4000,-898,-3000,-4500]

// let result = transaction.some(function(n){
//     return n>0
// })

// console.log(result) //true

// every method 
const transaction = [-1000,-2000,3000,-4000,-898,-3000,-4500]

let result = transaction.every(function(n){
    return n<0
})

console.log(result)