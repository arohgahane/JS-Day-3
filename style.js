console.log("Working...");

//not defined - Any variable which we try to access but not declared will throw us a reference Error : variable not defined
// console.log(myAge); // not defined

// undefined - If a variable is declared but not assigned  any value yet but we try to access that variable then we will get the error as undefined.
let myHobbies;
console.log(myHobbies);
myHobbies = "Carrom";
console.log(myHobbies);

// null - Its a default value assigned by a user to the variable as long as the variable has not been assigned its original / updated value

let amIadult = null;
console.log(amIadult);

amIadult = true; //Boolean value
console.log(amIadult);

// Global Scope and Local/Block Scope

// let fname = "Hari";
// const lname = "Bajaj";
// var age = 29;

// console.log(fname, lname, age);
// // Anything which is declared outside local or block scope or outside curly braces is called global scope
// {
//     console.log(fname, lname, age);
// }

// console.log(fname, lname, age);

// Anything which is inside between curly braces is called local/block scope.
{
    let fname = "Hari";
    const lname = "Bajaj";
    var age = 29;
    console.log(fname, lname, age);
}

// In Global Scope generally we are not able to access block scope variables as long as there's let/const keywords, so it will give us a reference error : variable not defined.
// but for var we can access them even on global scope.
// console.log(fname);
// console.log(lname);
console.log(age);


// Hoisting - Its only supported with that of var keywords and with the function. Let and const keywords do not support hoisting.
// let keyword variables cannot be accessed before declaration or initialization.
//console.log(game);// ReferenceError: Cannot access 'game' before initialization.
let game = "carrom";

//console.log(game1);// ReferenceError: Cannot access 'game' before initialization.
const game1 = "cricket";

// var keyword variables are hoisted.
console.log(game2);
var game2;
game2 = "Badminton";
console.log(game2); //Badminton


// Note - For var keyword variables, if we try to access them before assigning values to them will give us undefined but the moment we declare a value to it, it will give us the assigned value.


// Hoisting in functions

// functions are hoisted because of which we can call the function before declaring the function.

add(2,3);//arguments

function add(a,b){
    let result = a+b;
    console.log(result);
    // console.log("hello add function");
}