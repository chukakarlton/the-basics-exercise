/*Ques 1
 Define variables for first name and last name
let firstName = "chuka";
let lastName = "carlton";

// Concatenate the first name and last name with a space in between
let fullName = firstName + " " + lastName;

// Output the full name
console.log(fullName);*/

//question 2
let number = 4936;

// Extract ones place
let onesPlace = number % 10; // ones place: 6
number = Math.floor(number / 10); // Remove the ones place

// Extract tens place
let tensPlace = number % 10; // tens place: 3
number = Math.floor(number / 10); // Remove the tens place

// Extract hundreds place
let hundredsPlace = number % 10; // hundreds place: 9
number = Math.floor(number / 10); // Remove the hundreds place

// The remaining number is the thousands place
let thousandsPlace = number; // thousands place: 4

console.log("Thousands place:", thousandsPlace); // Output: 4
console.log("Hundreds place:", hundredsPlace);   // Output: 9
console.log("Tens place:", tensPlace);           // Output: 3
console.log("Ones place:", onesPlace);           // Output: 6


//question 3

//'true' - //its a string data type, because its enclosed in single quotes
//false - //its a boolean data type.
//1.5 - //its a number data type
//2 - //its a number data type
//undefined - //it indicates that a variable has been declared but not assigned a value
//{ foo: 'bar'} - //its an object data type.

//4


// 5
//The code logs '510' instead of 15 is because its a string concatenation
// '5' is treated as a string

console.log(Number('5') + 10);
// Output: 15

//question 6

console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);
// Output: The value of 5 + 10 is 15.

let names = [
    'car',
    'table',
    'chair',
    'house'
];
console.log(names);

let pets = {
    'rotweiler': 'dog',
    'tom': 'cat',
    'lion': 'cat',
    'tilapia': 'fish',
    'bat': 'lizard'
};
console.log(pets);


