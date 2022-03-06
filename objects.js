'use strict'

// Objects
// one of the JavaScript's data types.
// a collection of related data and/ or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = {key: value};

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}
 
const Dohyeon = { name: 'Dohyeon', age: 5 };
print(Dohyeon);

// with JavaScript magic (dynamically typed language)
// can add properties later
Dohyeon.hasJob = true;
console.log(Dohyeon.hasJob);

// can delete properties later
delete Dohyeon.hasJob;
console.log(Dohyeon.hasJob);

// 2. Computed properties
// key should be always string
console.log(Dohyeon.name);
console.log(Dohyeon['name']);

Dohyeon['hasJob'] = true;
console.log(Dohyeon.hasJob);

function printValue(obj, key) {
    // console.log(obj.key);
    console.log(obj[key]);
}
printValue(Dohyeon, 'name');
printValue(Dohyeon, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = {name: 'steve', age:3};
const person3 = { name: 'dave', age: 4 };

// const person4 = makePerson('Dohyeon', 20);
// console.log(person4);
// function makePerson(name, age) {
//     return {
//         name,
//         age
//     };
// }

const person4 = new Person('Dohyeon', 20);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in Dohyeon);
console.log('age' in Dohyeon);
console.log('random' in Dohyeon);
console.log(Dohyeon.random);
console.clear();
// 6. for ..in VS for ..of
// for (key in obj)
let key;

for (key in Dohyeon) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// for (let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

let value;
for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ... ])
const user = { name: 'Dohyeon', age: '10' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
// console.clear();
console.log(user3);

// 첫 번째 key => name
// 두번째 key => age

// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
