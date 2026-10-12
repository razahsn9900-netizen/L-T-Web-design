// console.log("Hello, World! from External JS")
// var a = 10;
// console.log(a);
// // Hoisting

// // Global Scope
// var a = 10;
// console.log(a);

// // Let
// // Block Scope
// // console.log(b);
// // TDZ (Temporal dead zone)
// let b = 20;
// console.log(b);
// b = 40;
// console.log(b);

// // {
// //    var a = "Hello";
// // console.log(a);
// // let b = "hi";
// // console.log(b); 
// // }
// // console.log(a); //10
// // console.log(b); //20

// const c = 30;
// console.log(c);
// a();
// console.log(c);

// 1. Named Function
function a() {
    console.log("Hello World 1");
    console.log("Hello World 2");
    console.log("Hello World 3");
    console.log("Hello World 4");
}

a();

// Function Expression 
var b = function (){
    console.log("Function Expression");
};

b();

// 3. Arrow Function

let c = () => {
    console.log(" Arrow Function");
};

c();

// 4. Callback Function (Anonymous function)
// 5. IIFE(Immediately Invoked Function Expression)

(function () {
    console.log("IIFE and callback");
})();
(() => {
    console.log("IIFE and callback");
})();

function sumofTwo(parameter1 = 2, parameter2 = 1){
    console.log("Value of Parameter 1", parameter1);
    console.log("Value of parameter 2", parameter2);
    
    console.log("Sum of Two variables is", parameter1 + parameter2);
}

sumofTwo(20, 90);
sumofTwo(40, 90);
sumofTwo(87);
