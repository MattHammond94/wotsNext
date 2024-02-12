// TYPE INFERENCE:

let age = 30; 
console.log(age);

// Although the above does look like ordinary JS - TypeChecking is happening under the hood.
// As age has been defined as a number TYPE we would not be able to change the age value later on. 
// If we di not explicity define the TYPE - TypeScript will automatically assign the TYPE value - This is called TYPE INFERENCE

// TYPE ANNOTATTION: 

let ageTwo: number = 40;
console.log(ageTwo);

// Type annotation we explicitly declare the TYPE of a value.

//  INFERENCE:
let firstName: string = "mario"
let isFictional: boolean

// ANNOTATTION
let planet = 'Earth'
let moons = 1
let isLarge = false


// If we give something a value of NULL we are intentionally providing the absense of value.
// If a variable is undefined, this is seen as an unintentional lack of value. 
// Both of these have their own TYPE associated to them. 

let something: null
let anotherThing: undefined

// As these two are defined as such they could only ever be either Null or Undefined respectively.