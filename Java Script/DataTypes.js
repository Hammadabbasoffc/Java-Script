// let x = 16 + "Volvo"
// Does it make any sense to add "Volvo" to sixteen? Will it
// produce an error or will it produce a result?

let y = "16" + "Volvo";


// ****** IMPORTANT ******* 

let x = 16 + 4 + "Volvo";

/* 
In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".

*/

let w = "Volvo" + 16 + 4;

/*
In the second example, since the first operand is a string, all operands are treated as strings.
*/

// ********* JS TYPES ARE DYNAMICS *********

/*
JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

*/

let q; //q is undefined
q = 5; // q type is number 
q = "John"; // q type is string



// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';

