// an object in javascript ia a collection that stores the properties of the entity 
//the object is intialize with the object name and the propertise contains key-value pair
//the key can be a string and the value of a property can be a string,number,array or a function

var person = {
    firstname:"Parth",
    lastname:"Patel",
    age:20
}
// console.log(person)

//access the value from the object there are 2 methods 
//1) dot notation it is the easiste method to access the value

// console.log(person.age)

// //bracket notation 

// console.log(person['firstname'])

var cap = {
    firstname : 'Steve',
    lastname : 'Rogers',
    age : 102,

    friends : ['parth','anuj','aditya'],

    isavengers : true,

    address: {
        state : 'new york',
        city : {
            name : 'mumbai',
            pincode : 400097
        }
    }
}

console.log(cap.friends[1])
console.log(cap.address.city.name)

cap.isavengers =false
console.log(cap)
cap.movies = ['kgf','Animal','go goa gone','dhamal']
console.log(cap)
delete cap.movies
console.log(cap)