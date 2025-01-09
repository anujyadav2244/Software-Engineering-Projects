// It means hiding the data that should not be alloweds to access particular data & method from the inside of the class for the outside environment.

// function person(name,age){
//     var name = name  
//     this.age = age

//     this.getname = function(){
//         return name
//     }
// }

// let person1 = new person('Parth',19)

// console.log(person1.getname())

// get and set method 

// get method example

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     get lang() {
//       return this.language
//     }
//   }

// console.log(person.lang) // Output: "en"

//set method example

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "No",
    set lang(value) {
      this.language = value;
    },
    get lang() {
      return this.language;
    }
  };

person.lang = 'en'; // Using the set method to change the language
console.log(person.lang); // Output: "en"

