//

// let arr = [
//     {name : "A", age: 11, Gender: "M"},
//     {name : "B", age: 12, Gender: "F"},
//     {name : "C", age: 13, Gender: "M"},
//     {name : "D", age: 14, Gender: "F"},
//     {name : "E", age: 15, Gender: "M"},
//     {name : "F", age: 16, Gender: "F"},
//     {name : "G", age: 17, Gender: "M"}
// ]

// //Age of all the men(ages)

// let males = arr.filter(function(obj){
//     return obj.Gender == "M"
// }).map(function(a){  // this is called chaining method
//     return a.age
// })

// console.log(males)

//from the transaction array filter out the positive elements and calculate the total amount 
//use filter and reduce to achive this
const transaction = [1000,3000,4000,2000,-898,3000,-4500]   

let positive = transaction.filter(function(plus){
    return plus>0
}).reduce(function(add,value){
    return add+value
},0)

console.log(positive)
