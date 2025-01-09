// poly means many
//morph means forms
//ism  means way or a method

//def :- polymorphism means the 2 methods name are same but they do performs different actions.

class animal{
    sound(){
        console.log('Animal make different sounds')
    }
}

class dog{
    sound(){
        console.log('Dog barks')
    }
}

class cat{
    sound(){
        console.log('Cat meow')
    }
}

let animal1 = new animal()
animal1.sound()
let dog1 = new dog()
dog1.sound()
let cat1 = new cat()
cat1.sound()