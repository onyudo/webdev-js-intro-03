// Prevent us from attempting to use variables
// that are not declared
"use strict";

/*

console.log(5 + 3);         // Output: 2
console.log(1 - 7);          // Output: 0
console.log(1 + "1");        // Output: 11
                             // What? Why? Search for the answer
                             // You get 11 here because javascript is concatenating a number and a string, resulting in 11. If it was writtten as 1+1 the result would be 2.

console.log(3 - 4 * 5)       // Output: -17
console.log((3 - 4) * 5);    // Output: -5
                             // Remember order of precendence

console.log(6 / 5);          // Output: 1.2
console.log(6 % 5);          // Output: 1
                             // Modulus return the remainder. This operator is extremely useful.

console.log(1 == 1);         // Output: true
console.log(1 == "1");       // Output: true
console.log(1 === "1");      // Output: false

console.log(1 || 2);         // Output: 1
console.log(2 || 1);         // Output: 2
console.log(1 && 2);         // Output: false
console.log(1 && 1);         // Output: true


// Checking if a number is even or odd

let number = 7;
if (number % 2 === 0) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}

// Finding the remainder of a division

let a = 10;
let b = 3;
let remainder = a % b;
console.log("Remainder of " + a + " divided by " + b + " is " + remainder);

// Cycling through an array

let colors = ["red", "green", "blue", "yellow"];
let index = 5; // Index larger than the length of the array

let color = colors[index % colors.length];
console.log("Color at index " + index + " is " + color); // Color at index 5 is green?

// Modulus operator makes the index "wrap around" when it's greater than the array length.

// Determine if a number is a multiple of another number

let num = 15;
let divisor = 5;

if (num % divisor === 0) {
    console.log(num + " is divisible by " + divisor);
} else {
    console.log(num + " is not divisible by " + divisor);
}

*/