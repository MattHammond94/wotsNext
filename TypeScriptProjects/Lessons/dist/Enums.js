"use strict";
// ENUMS:
// Special type in TS that allows us to store a set of consts or keywords and associate them as a numeric value(index)
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const enumDoc = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { name: 'someData' }
};
const enumDocTwo = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: { name: 'someMoreData' }
};
console.log(enumDoc, enumDocTwo);
