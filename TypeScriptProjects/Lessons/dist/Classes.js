"use strict";
//  CLASSES:
// Classes are used to create Objects
class Persons {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.id = id,
            this.name = name;
    }
}
const matt = new Persons(1, 'Matty Moo');
console.log(matt);
class DifferentPerson {
    // If you are not explicitly declaring the instance variables as public then you can instead re define them as below:
    // id: number
    // name: string
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const julie = new DifferentPerson(1, 'Me Julie');
console.log(julie.register());
// ================================================
// Extending a class in  TS (inheritance):
// Employee is a subclass of DifferentPerson class:
class Employee extends DifferentPerson {
    constructor(id, name, position) {
        // Using super in the constructor allows access to all the superclass(parent class) attributes that were defined:
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, 'Abigail', 'Manager');
console.log(emp);
// When extending a class the new class has access to all functions defined on the parent class.
console.log(emp.register());
