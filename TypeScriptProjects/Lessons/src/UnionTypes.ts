// UNION TYPES:
// Allows a variable to hold multiple types

let someId: number | string

someId = "1"
someId = 1

// A case we might use a union type is where we would set the default of a value to null

let email: string | null = null

// Union type Aliases:
type Id = number | string
let anotherId: Id;

// ================================================
// Potential issues when using Union types:

// function swapIdType(id: Id): Id {
//   return id
// }

// IF I called the above function as below how would I know if the function was passed a number or a string?
// swapIdType(5)

// if I tried to parse a passed id into a number type using parseInt and the Id passed was actually a number already an error would be returned: 
// parseInt(id)

// We will only be able to use methods that are common to BOTH the possible data types that the function can take.
// as parseInt 

// A way around this would be using TYPEGUARDS

// ================================================

// TYPE GUARDS:

function swapIdType(id: Id): Id {
  if (typeof id === 'string') {
    return parseInt(id)
  } else {
    return id.toString()
  }
}

const idOne = swapIdType(1)
const idTwo = swapIdType('2')

console.log(idOne);
console.log(idTwo);

// =====================================
// TAGGED INTERFACES:

// When using interfaces as arguments for functions
// If we specify an argument can be one of two possible interfaces then we can only access common properties between the two.
// By adding a common property for each interface we can use this property in a typeguard to identify it.
// This is known as a tagged interface:

interface Admin { 
  type: 'admin',
  username: string,
  email: string,
  id: Id
}

interface Person {
  type: 'person',
  firstName: string,
  age: number,
  id: Id
}

function logDetails(value: Admin | Person): void {
  console.log(value.type)

  if (value.type === 'admin') {
    console.log(value.username)
    console.log(value.email)
  }

  if (value.type === 'person') {
    console.log(value.firstName)
    console.log(value.age)
  }
}

const person2: Person = { type: 'person', firstName: 'Julie', age: 44, id: 1 }
const admin1: Admin = { type: 'admin', username: 'An Admin', email: 'anadmindemail@test.com', id: 1 }
logDetails(person2);
logDetails(admin1);
