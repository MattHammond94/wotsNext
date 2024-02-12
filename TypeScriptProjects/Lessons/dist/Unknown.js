"use strict";
// UNKNOWN:
// It is better practice to use Unknown instead of any:
let exampleAny;
let exampleUnknown;
// You can still accept anyhting into an unknwon variable:
exampleUnknown = true;
exampleUnknown = 'String';
exampleUnknown = 123;
// Unlike Any you cannot assign it to a well known type (like string/boolean) and you cannot access any properties on it.
// !!!! i.e. Unknown cannot be used in an unsafe manor !!!!
// Any in this scenario will not return any typecheck errors:
// let anySetBool: boolean = exampleAny;
// exampleAny.trim();
// The below will return an error without using a TYPE GUARD
// let unknownSetBool: boolean = exampleUnknown;
// exampleUnknown.trim();
// WITH TYPEGUARD:
if (typeof exampleUnknown == 'string') {
    exampleUnknown.trim();
}
if (typeof exampleUnknown == 'boolean') {
    let unknownSetBool = exampleUnknown;
}
// ==============================================================
// The main reason for any was for the initial migration of JS to TS
// By using unknown initially will allow a function to accept all types initially. 
// The function will still allow all types similarly to using any however it will provide type safety allowing you to assess the use case of the function.
// This can guide you to add appropriate checks.
function log(value) {
    if (typeof value == 'number') {
        console.log(value.toFixed(2));
    }
    else {
        console.log(value);
    }
}
log(123.456);
log('Hello World!');
// function log(value: unknown) {
//   console.log(value.toFixed(2));
// }
// log(123.456);
// log('Hello World!')
