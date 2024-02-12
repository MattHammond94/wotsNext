"use strict";
// ARRAYS:
let names; // => An array of only string values
let ages = [25, 28, 24];
// names.push(true) => returns an error as true is not a string
// Type inference with Arrays:
let fruits = ['apples', 'pears', 'grapes'];
// Below only works because peaches is a string - TS has infered that fruits is an array of String types.
fruits.push('peaches');
// f === String type:
const f = fruits[2];
// Not giving explicit type for values in an array:
// A union type can be one of a set of types
let things = [1, true, 'string'];
// t can be either a string, number of boolean.
const t = things[0];
// ===============================================
// OBJECT LITERALS:
let user;
// A user must be an object, it must have the 3 properties specified and the 3 properties must be the specified values:
user = {
    firstName: 'Mario',
    age: 20,
    id: 1
};
user.firstName = 'MattyMooMilk';
// user.id = '14' // => Error! Not a string
