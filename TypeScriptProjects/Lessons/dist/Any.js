"use strict";
// ANY TYPE
// Allows a variable to be assigned any value type:
let anything;
let another;
anything = true;
anything = 'string';
anything = false;
another = 'Cabbage';
another = 44;
// Any with Arrays:
let mixture = ['hello', true, null, { anObject: 22 }];
mixture.push(44);
console.log(mixture);
// Functions with Any:
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether('Ham');
const resultTwo = addTogether(44);
console.log(resultOne);
console.log(resultTwo);
// Any should be used sparingly - Removes the point of TS.
