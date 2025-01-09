// There are 2 types of inheritance classical & Prototype inheritance

// Classical Inheritance
// def :- Methods and propertise from Base class can be put down or can be passed into derived class

class Person{
    constructor(name,age){ //class constructor
        this.name = name
        this.age = age
    }

    welcome(){  //class method
        console.log(`Welcome ${this.name}`)
    }
}

class Teacher extends Person{
    constructor(name,age,strength){ //class constructor but inheriting from the person class
        super(name,age)
        this.strength = strength
    }
    test(){ // class method but inheriting from the person class
        super.welcome()
    }
}

class Student extends Person{
    constructor(name,age,id){ //class constructor but inheriting from the person class
        super(name,age)
        this.id = id
    }
    exam(){ // class method but inheriting from the person class
        super.welcome()
    }
}

// let person1 = new Person('Parth',19)

let teacher1 = new Teacher('Sunita',43,200)
teacher1.test()

// let Student1 = new Student('Aditya',19,53003230126)
// console.log(person1)
// console.log(teacher1)
// console.log(Student1)