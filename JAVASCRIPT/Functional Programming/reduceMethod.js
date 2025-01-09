// you need the sum of every element in an array

const arr = [1,2,3,4]

// let sum = 0
// for(let i = 0;i < arr.length;i++){
//     sum = sum + arr[i]
// }

// console.log(sum)

//Resuce method 
//Using upper code using reduce method

// let result = arr.reduce(function(acc,value){ //acc means it works like let sum = 0 
//     let updatedsum = acc + value
//     return updatedsum
// },0)

// console.log(result)

let product = arr.reduce(function(acc,value){
    let updatedproduct = acc*value
    return updatedproduct
},1)

console.log(product)