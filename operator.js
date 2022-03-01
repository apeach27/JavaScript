// 1. String concatenation

console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals:
. . . .
1+2 = ${1 + 2}`);

console.log("DH's  \n\tbook");

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter +1;
// preIncrement = counter;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x+ y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6) // less than or equal
console.log(10 > 6) // greater than
console.log(10 >= 6) // greater than or equal

// 6. Logical operators: || (or) , && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or) , finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// check() 함수는 true 값을 출력함

// && (and) , finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObjedt && nullabeObject.something

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('🤨');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7.Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const DH1 = { name: 'DH' };
const DH2 = { name: 'DH' };
const DH3 = DH1;
console.log(DH1 == DH2);
console.log(DH1 === DH2);
// 1과 2는 reference가 다름
console.log(DH1 === DH3);

// 8. Conditional operators; if
// if, else if, else
const name = 'DH';
if (name === 'DoHyeon') {
    console.log('Welcome, DoHyeon');
} else if (name === 'coder') {
    console.log("You're amazing coder");
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'Grace' ? 'yes' : 'no');
// ? 뒤의 값을 순서대로 비교함

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// the check the condition
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);
// 블럭을 먼저 실행하고 싶다면 do while
// 조건문이 맞을때만 실행하고 싶다면 while

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i-=2){
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// break, continue
// 01. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++){
    if (i % 2 === 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}

// 02. iterrate from 0 to 10 and print numbers nutil reaching 8 ) use break
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}