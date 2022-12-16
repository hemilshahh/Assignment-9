/*function OuterFunction()
{ var outerVariable = 100;
function InnerFunction() {
    alert(outerVariable);
}
return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();*/
console.log("Answer 1");
console.log("1.) InnerFunction is a closure.")
console.log("2.) The output of the program is 100.\n")

console.log("Answer 2");
console.log("A scope defines where you have access to variable. There are 2 types of scope global and local. Global is where everything is created, local is created by blocks that has '{}'.\n Whereas, closure is when you create function within another function then innerfunction is a closure.\n");

console.log("Answer 3");
console.log("Lexical scope describes how nested (also known as child) functions have access to variables defined in parent scopes.\n A closure is a function having access to the parent scope, even after the parent function has closed.\n ");

console.log("Answer 4");
console.log("The output for the following closure will be (3 3 3 ). As, var is reffering only to one variable through out the loop.");