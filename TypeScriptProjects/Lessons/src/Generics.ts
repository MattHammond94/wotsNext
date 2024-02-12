// GENERICS

// Generics allow code to be reused but for different types:

// This function takes and object and adds a random ID.
const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}

let docOne = addUID({ name: 'Matt', age: 44 })

console.log(docOne);

// if we try and access any properties from the object an error is returned:
// console.log(docOne.name);
// console.log(docOne.age);

// Because the function was passed a undefined object it is unaware of the properties that belong to it because they were not defined and captured.


// We can resolve this using a GENERIC:
// Generics are used before the args in the function. Can be any letter but commonly marked as T.
// Generics capture all propeties of an object if an object is passed.
const addUID2 = <Z>(obj: Z) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}

let docTwo = addUID2({ name: 'Salmon', age: 22 })

console.log(docTwo.name);

// The above works however we have not specified the type of the argument being passed to addUID2 meaning we could pass it a string or a number in theory.  
let docThree = addUID2('A string');

// Very weird:
console.log(docThree);


// ==================================================
// To resolve this we can use the extends keyword in the GENERIC to only allow specific data types.
const addUID3 = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}

let docFour = addUID3({ name: 'Fourth', age: 444 })

console.log(docFour.age);
console.log(docFour.name);


// =================================================
// This can be made more specific by adding obj properties:

const addUID4 = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}

// Both of these will error because the generic ensure that addUID4 only takes an object with a name property that is a string type:
// let docFive = addUID4({ age: 5 });
// let docFiveTwo = addUID4({ name: 44 })



// ================================================
// GENERICS WITH INTERFACES:

// The property that is marked with the generic can now take a data type on creation of the object.
// This will then define strictly what that property can take.

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const doc: Resource<object> = {
  uid: 1,
  resourceName: 'Name',
  data: { name: 'someData' }
}

const anotherDoc: Resource<string[]> = {
  uid: 2,
  resourceName: 'doc with array for data',
  data: ['One', 'Two', "Three"]
}

console.log(doc, anotherDoc);
