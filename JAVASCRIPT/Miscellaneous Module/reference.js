// Reference datatype creates in heap memory contains objects , arrays , functions

let firstPerson = {
    name : 'Parth',
    age : 19
}

let secondPerson = firstPerson

firstPerson.name = 'steve' // here it will change the value with both the person
console.log(firstPerson)
console.log(secondPerson)