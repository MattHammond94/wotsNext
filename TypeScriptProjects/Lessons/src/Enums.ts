// ENUMS:

// Special type in TS that allows us to store a set of consts or keywords and associate them as a numeric value(index)

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface EnumResource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const enumDoc: EnumResource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { name: 'someData' }
}

const enumDocTwo: EnumResource<object> = {
  uid: 2,
  resourceType: ResourceType.PERSON,
  data: { name: 'someMoreData' }
}

console.log(enumDoc, enumDocTwo);

