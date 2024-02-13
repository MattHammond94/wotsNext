// TS docs tell you to use Interfaces:
// However types have more features, are more versatile and interfaces are more complicated.
// Interfaces are also no longer faster when being compiled.

// An interface always returns data wrapped in an object. It cannot be used to simply define a string or number.
// This means if you start your code base using interfaces and later along find you need a simple variable defined you will need to mix types and interfaces.
type SType = string

interface SInter {
  string: string
}

// You also cannot use an or(|) inside of an interface:

type SOrNType = { name: string } | { age: number } // Can be an object with either a name as a string or an age as a number

// This would need to be done as two interfaces:

interface SNameInter {
  name: string
}

interface SAgeNumber {
  age: number
}

// with and(&) it would look like this:

type SAndNType = { name: string } & { age: number } // is an object with a name as a string and an age as a number.

interface N { age: number }

interface SNameInterAnd extends N {
  name: string
}


// Interfaces can be merged by individually declaring different properties at different stages to defined interfaces:

interface Something {
  name: string
}

interface Something {
  age: number
}

const somethingOne: Something = {
  name: 'Matt',
  age: 45
}

// If the above is done using types however an error will be declared.
// This prevents potential issues whereby you declare two of the same interface and extend/OVERRIDE its properties by accident.


type UserType = {
  name: string,
  age: number
}

interface UserInter {
  name: string,
  age: number
}

const theUser: UserType = {
  name: 'MattyBoi',
  age: 44
}