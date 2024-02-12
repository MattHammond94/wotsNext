// function addTwoNumbers(a, b) {
//   return a + b
// }

// In the above an error will be returned as we have not specified the types for the args:


// The colon following the args in parenthesis is for specifying the return value type.
function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

const subtractTwoNumbers = (a: number, b: number): number => {
  return a - b;
}

console.log(addTwoNumbers(1, 2));

// No return type is specified as there is no return value from this function:
function addAllNumbers(items: number[]) {
  const total = items.reduce((a, c) => a + c, 0);
  console.log(total);
}

// Notice how TS has INFERED the return value of this function to void type:
addAllNumbers([1, 4, 8, 9]);


// The return type of the greeting function below returns a string but this is inferred by TS when we assign result:
function formatGreeting(name: string, greeting: string) {
  return `${greeting}, ${name}`
}

const result = formatGreeting('Matt', 'Howdy');
console.log(result);