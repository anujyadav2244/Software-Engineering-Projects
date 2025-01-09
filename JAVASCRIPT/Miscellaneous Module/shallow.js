// spread operator (...)

let firstPerson = {
    name : 'Parth',
    age : 19,

    address : {
        city : 'Mumbai',
        State : 'Maharashtra'
    } // here we will change the nested object value it will reflect in both person but we want to reflect only in one person we use deep copy
}
let secondPerson = {...firstPerson} // without changing the other person value

secondPerson.name = 'steve'

console.log(firstPerson)
console.log(secondPerson)
