// what is prototype

// let myObj = {

// }

// console.log(myObj)


// let person1 = {
//     name : 'Parth',
//     age : 19
// }

// console.log(person1)
// console.log(person1.hasOwnProperty('name'))// true 

// DEF :- A prototype object is a object that gets linked to the object by default whenever we create an object and inside that particular prototype object we will find all the method that we can use with our object


// constructor function

// function parth(name, age){
//     this.name = name
//     this.age = age
// }

// let person2 = new parth('steve',30)

// console.log(person2)

// for understanding the prototype
// c:\Users\PARTH PATEL\OneDrive\Pictures\Camera Roll\WhatsApp Image 2025-01-07 at 19.23.44_20a16c46.jpg

function person(name , age){
    this.name = name 
    this.age = age
}

//calling function from the person function prototype
person.prototype.getNameAndAge = function (){
    console.log(`I am ${this.name} and my age is ${this.age}`)
}

let person1 = new person('parth',19)

let person2 = new person('abhi',20)

console.log(person1.getNameAndAge())

console.log(person2)
