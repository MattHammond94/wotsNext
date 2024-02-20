// ===================================
// OMIT and PICK

// Pick and Omit are two types that allow us to select a subset of fields from a particular type. 

type Zinger = {
  id: number,
  firstName: string,
  lastName: string,
  password: string,
  createdAt: string
}

type PotentialZinger = {
  id: number,
  firstName: string,
  lastName: string,
  referrer: 'invite' | 'ad'
}

// =============
// PICK: 
// Using pick allows us to define a new type based on a previous type and only select the fields required:
export type RenderedZinger = Pick<Zinger, 'firstName' | 'lastName'>

const ren: RenderedZinger = {
  firstName: 'John',
  lastName: 'Smith'
}

console.log(ren);

// =================
// OMIT:
// Using Omit allows us to Omit(remove) certain properites from a defined type. Below we omit the id property so we are unable to use this attribute.

export type AnotherPotentialZinger = Omit<PotentialZinger, 'id'>;

// Notice how the id property is now causing a type error:

// const PoZing: AnotherPotentialZinger = {
//   id: 1,
//   name: 'Julie',
//   referrer: 'Sweden'
// }

// console.log(PoZing);


// ===============================
// In essence PICK allows you define an allow list while OMIT defines a deny list

// If we add aditional fields to Zinger => RenderedZinger will only ever allow access to fistName and lastName
// Whereas Omit will do the opposite and allow access to all new keys/values with the exception of the id property.




// ================================
// A common use case for PICK and OMIT is using them to define our types for data pulled from an API => Certain fields we may want to OMIT or only have access to.

// In the below we have OMITED password meaning RendererZinger2 does not have access to the password property 
// We have also CHANGED the data type of createdAt from a string to a date:
type RenderedZinger2 = Omit<Zinger, 'createdAt' | 'password'> & {
  createdAt: Date
}

// This function essentially mimics the process of fetching a Zinger type from an API and converting it to the RenderedZinger2 type which is a closer representation of the attributes required for the frontend application.
declare function hydrateUser(r: Zinger): RenderedZinger2;

// below is a different usecase of using Omit within a utility function. 
// This function takes any type (defined as a generic (T)) and from the T that is passed will omit either of the createdAt or updatedAt fields IF(?) they exist.
declare function removeDates<
  T extends { createdAt?: Date, updatedAt?: Date }
>(obj: T): Omit<T, 'createdAt' | 'updatedAt'>;






// ================================
// Using PICK within a function ARG to overcome type issues:

const u: Zinger = {
  id: 1,
  firstName: 'John', 
  lastName: 'Groves',
  password: 'secret',
  createdAt: "2024-02-20"
};

const p: PotentialZinger = {
  id: 1,
  firstName: "Sammy",
  lastName: "Sosa",
  referrer: 'invite'
}

// declare const p: PotentialZinger;


// In the example below our function only takes a type of Zinger.
function sendMarketingEmail(recipient: Zinger) {
  console.log(`email sent to ${recipient.firstName}`)
}

sendMarketingEmail(u);
// Notice how this function will return a type error when called with a PotentialZinger type instead of a Zinger which the function allows:
// sendMarketingEmail(p);


// In this function below however as we have used pick to only select the firstName and lastName keys from an obj
// The function will accept the p (PotentialZinger) objects as they contain these attributes:
function sendMarketingEmail2(recipient: Pick<Zinger, 'firstName' | 'lastName'>) {
  console.log(`email sent to ${recipient.firstName} ${recipient.lastName}`);
}

sendMarketingEmail2(u);
sendMarketingEmail2(p);
