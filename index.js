// Arithmetic operator
let a = 10;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// Unary Operators
let c = 5;
console.log(c++);
console.log(++c);

// Comparision Operator, comparision op: ka ans ya tou true ayega ya tou false!
console.log(10>5);
console.log(10<5);
console.log(10>=5);
console.log(10<=5);
// Loose eqaulity
console.log('5'!=5);
// // Strict Equality
console.log(5!==5);

// Turary Operator
let age = 5;
let answer = (age>18) ? "I can Vote" : "I cannot Vote";
console.log(answer);

// Logical Operator
let ans1 = (true && false && true);
console.log(ans1);
let ans2 = (true || false || true);
console.log(ans2);
let ans3 = !(false);
console.log(ans3);
// Working with non boolean
console.log(false || 'Anas');

// Bitwise operators
console.log(2&5);
console.log(2 | 5);
console.log(~(0));
console.log(2^2);
console.log(10>>1);

// Conditional
let age2 = 19;
if(age2 >= 18) {
    console.log("You can Vote");
} else {
    console.log("You cannot Vote");
}

// Switch case
let num = 3;
switch(num) {
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    case 4: console.log('D');
    break;
    default: console.log('Error');
}