let firstPerson = {
    name : 'Parth',
    age : 19,

    address : {
        city : 'Mumbai',
        State : 'Maharashtra'
    }
}

let secondPerson = JSON.parse(JSON.stringify(firstPerson)) // this for changing the nested object value

secondPerson.address.city = 'Gujarat'

console.log(firstPerson)
console.log(secondPerson)