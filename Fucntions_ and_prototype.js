

// All func in js return undefined by default and when we call a constructor without a new keywor, this refers to global object 
// since js interpreter doesn't add a return stmt , the constructor returns a undefined.

// NOTE: All funcs have 2 default arguments, **this and arguments**


// When we create a function , JS interpreter creates 2 Objects 
// 1. Function Object 
// 2. Prototype Object 

// Function Object <---> Prototype Object

function foo() { }

foo()

console.log(foo.prototype)
console.log(foo.prototype.constructor)