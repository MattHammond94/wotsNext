// NEVER:
// Never defines a function that will never end. I.e. We cannot have a final return or an end to a defined function.
// Never is a function that will never happen.

const doSomething = (): never => {
  throw "never";
};