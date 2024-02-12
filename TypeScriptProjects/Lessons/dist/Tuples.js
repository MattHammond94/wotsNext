"use strict";
// TUPLES
// Similar to an array but ensure the data within is in a specific order:
let person = ['Matt', 44, true];
person[0] = 'MattyMoo';
console.log(person);
//Common Tuples:
// hue, saturation, luminance, alpha => common color 
let hsla;
hsla = [200, '100%', '50%', 1];
let xy;
xy = [94.44, 44.44];
function useCoords() {
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
// Named Tuples:
let player;
player = ['Matt', 44];
console.log(player[0]);
