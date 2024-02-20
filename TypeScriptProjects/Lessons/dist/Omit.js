"use strict";
// ===================================
// OMIT and PICK
Object.defineProperty(exports, "__esModule", { value: true });
const ren = {
    firstName: 'John',
    lastName: 'Smith'
};
console.log(ren);
// ================================
// Using PICK within a function ARG to overcome type issues:
const u = {
    id: 1,
    firstName: 'John',
    lastName: 'Groves',
    password: 'secret',
    createdAt: "2024-02-20"
};
const p = {
    id: 1,
    firstName: "Sammy",
    lastName: "Sosa",
    referrer: 'invite'
};
// declare const p: PotentialZinger;
// In the example below our function only takes a type of Zinger.
function sendMarketingEmail(recipient) {
    console.log(`email sent to ${recipient.firstName}`);
}
sendMarketingEmail(u);
// Notice how this function will return a type error when called with a PotentialZinger type instead of a Zinger which the function allows:
// sendMarketingEmail(p);
// In this function below however as we have used pick to only select the firstName and lastName keys from an obj
// The function will accept the p (PotentialZinger) objects as they contain these attributes:
function sendMarketingEmail2(recipient) {
    console.log(`email sent to ${recipient.firstName} ${recipient.lastName}`);
}
sendMarketingEmail2(u);
sendMarketingEmail2(p);
