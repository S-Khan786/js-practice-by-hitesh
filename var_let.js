/* Var and Let */

// var a; // Declaration
// a = 4; // Initialization

// Re-declaration
// var a = 5;
// var a = 7; // Redecalare function-scoped variable 'a'.

// let b = 6;
// let b = 7; // Cannot redeclare block-scoped variable 'b'.






// Scoped (var -> Function Scoped) and (let -> Block Scoped)
// function testVar() {
//     if(true) {
//         var x = 10;
//     }
//     console.log(x);
// }

// function testLet() {
//     if(true) {
//         let y = 10;
//     }
//     console.log(y); // y is not defined -> bcz let is block scoped
// }

// testVar();
// testLet();






// Hoisting
// console.log(a);
// var a = 5;

// console.log(b); // Cannot access 'b' before initialization
// let b = 6;

// Hoisting happen in both var and let but in var it is undefined and 
// in let hoisted happen too, but remains in temporal dead zone until it's declared and initialized. 





// Global Object Property
// var m = 5;
// let n = 6;

// console.log(window.m); // possible
// console.log(window.n); // Not possible

// var becomes a property of the window object in browsers.
// let does not pollute the global scope.