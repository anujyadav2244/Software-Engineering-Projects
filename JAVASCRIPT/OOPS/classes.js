// 

class person{
    
    constructor(name, age){
        this.name = name
        this,age = age
    }

    welcome(){
        console.log(`Welcome ${this.name}`)
    }
}

let person1 = new person('Parth',19)

let person2 = new person('ABhi',22)

let person3 = new person('Nihar',20)

person1.welcome()
// console.log(person1)
// console.log(person2)
// console.log(person3)