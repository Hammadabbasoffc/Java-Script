// In js there are three ways to declear the variables 
// 1. var
// 2. let
// 3. const

// ******** Example of using var **********

var x = 12;
var y = 23;
var a = 34 , w = 45;

console.log(x + y);
console.log(a + w);

// ********** Properties of Let **********


/*

Variables defined with let cannot be Redeclared

Variables defined with let must be Declared before use

Variables defined with let have Block Scope

*/

// ##### EXAMPLE #######

// let str = "John Doe";
// let str = 0; 

// it will show you an error 

// But with using var you have to change it 

var str = "John Doe";
console.log(str);
var str = 0; 
console.log(str);


/*

********** CONST PROPERTIES 

Variables defined with const cannot be Redeclared

Variables defined with const cannot be Reassigned

Variables defined with const have Block Scope

*/

const PI = 3.1415;
// PI = 23323; // Here it will show an error
// PI = PI + 10; // here it will also show an error
/*
JavaScript const variables must be assigned a value when they are declared:

const PI = 3.14159265359;

False:
const PI;
PI = 3.14159265359;
*/

// ********** Operators in JS **********

// Assignment Operator

let v = 10;

// Assign the value 5 to x
let s = 5;
// Assign the value 2 to y
let l = 2;
// Assign the value x + y to z:
let q = s + l;


// Addition Operator 

let u = 5;
let i = 2;
let o = i + u;

// Multiplication Operator

let k = 5;
let j = 2;
let g = k * j;