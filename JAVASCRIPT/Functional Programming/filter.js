// you have to check for even number and put them in a seperate array


//normal method
// let arr = [1, 2, 3, 4, 5];

// let evenArr = []

// for(let i = 0; i<arr.length; i++){
//     if(arr[i]%2==0){
//         evenArr.push(arr[i])
//     }
// }   
// console.log(evenArr)

//using filter method
//filter returns a new array it will return all those elements that matches the specific condition it the condition is true it will return the element for that condition and if it is false it will discard that element

// let num = [1, 2, 3, 4, 5]

// let evenNum = num.filter(function(n){
//     return n%2==0
// })

// console.log(evenNum) 

const transaction = [1000,2000,3000,4000,-898,3000,-4500]   

let deposit = transaction.filter(function(n){
    return n>0
})
console.log(deposit)

