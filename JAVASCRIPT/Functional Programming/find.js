// find retuens the first element of the array that satisfies the condition 

const transaction = [1000,2000,3000,4000,-898,3000,-4500]

let firstwithdrawl = transaction.find(function(n){
    return n<0
})

console.log(firstwithdrawl)     

//find index
let firstwithdrawlIndex = transaction.findIndex(function(n){
    return n<0
})

console.log(firstwithdrawlIndex)   