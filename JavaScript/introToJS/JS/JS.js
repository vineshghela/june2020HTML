
// console.log(`the sum is :${letsAdd(10,25)}`);

// function letsAdd(a,b){
//     return a+b;
// }

// greeting();

// function greeting(){
//     console.log("Hello everyone")
// }



// let hi = function(name){
//     alert(`Well this is annoying ${name}`);
// }

// // hi();

// // hi("Piers");
// // hi("Alan");


// hello = (name, age) =>"Hello" + name +" my age is"+ age;


// console.log(hello("Jim",20));

// bye = name => "Hello" +name;

// console.log(bye("Vin"));


// // [1,2,3].forEach(alert);

// if(false){
//     console.log("Hello")
// }else{
//     console.log("Good bye!")
// }

// let age1 =18;

// let status = (age1>=18)? "Adult":"Minor";

// console.log(status);

//objects

class pet{
    constructor(petName){
        this._name = petName;
        this._eaten = false;
    }
    hungry(){
        if(!this._eaten){
            console.log(`${this._name} is hungry`)
        }else{
            console.log(`${this._name} has eaten!`)
        }
    }
    eating(){
        console.log(`${this._name} is eating!`)
    }
    speak(){
        console.log(`${this._name} says hi!!!`)
    }


}

let newPuppy = new pet("Sir bark-Alot!");
newPuppy.eating();
newPuppy.hungry();
newPuppy.speak();

export default pet;

