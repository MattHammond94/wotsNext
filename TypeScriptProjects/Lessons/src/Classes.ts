//  CLASSES:
// Classes are used to create Objects

class Persons {
  constructor(public id: number, public name: string) {
    this.id = id,
    this.name = name
  }
}

const matt = new Persons(1, 'Matty Moo');
console.log(matt)


// =========================================
// Using Data Modifiers with Classes:

// By default class attributes defined in constuctors are public.
// They can also be PRIVATE or PROTECTED.


// As below you can define an interface to be implemented by a Class.
// Whereas in JS public does not need to be specified on instance variables(this.) 
// When using the approach below public(OR PRIVATE/PROTECTED dependent on situation) will need to be specified to avoid type erros. 

interface PersonInterface {
  id: number,
  name: string,
  register(): string
}

class DifferentPerson implements PersonInterface {

  // If you are not explicitly declaring the instance variables as public then you can instead re define them as below:
  // id: number
  // name: string

  constructor(public id: number, public name: string) {
    this.id = id,
    this.name = name
  }

  register() {
    return `${this.name} is registered`
  }
}

const julie = new DifferentPerson(1, 'Me Julie');
console.log(julie.register())



// ================================================
// Extending a class in  TS (inheritance):

// Employee is a subclass of DifferentPerson class:
class Employee extends DifferentPerson {
  // redefining variable instead of using public keyword:
  position: string

  constructor(id: number, name: string, position: string) {
    // Using super in the constructor allows access to all the superclass(parent class) attributes that were defined:
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(1, 'Abigail', 'Manager');
console.log(emp);

// When extending a class the new class has access to all functions defined on the parent class.
console.log(emp.register());
