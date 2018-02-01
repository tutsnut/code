//Associative Array
let skillSet = new Array();
skillSet["Programming Language"] = "JavaScript";
skillSet["Styling"] = "Sass";
skillSet["Framework"] = "Angualr";

console.log(skillSet[0]) // undefined
console.log(skillSet["Framework"]) //Angular


//Default assignment
//Be careful when using with 0, false, null, undefined and empty string in left hand operand
//This can be used as a shorthand to check null, undefined and empty string(a !== null && a !== undefined && a !== '')
let a;
let b = 1;
let c = 2;
let d = 0;
console.log(a || b); //Output = 1
console.log(b || c); //Output = 1
console.log(d || 3); //Output = 3

//Ternary Operator
let value = 0;
if (value) {
    console.log("True");
} else {
    console.log("False");
}
//=================OR=================//
let output = value ? "True" : "False";
console.log(output) //False
