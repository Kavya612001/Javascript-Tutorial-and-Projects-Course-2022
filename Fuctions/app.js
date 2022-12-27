/*
// IIFE, Immediately Invoked Function Expression
// we can have two or more IIFE's (function) with the same variable name
// older approach - new modules
// simple approach - to avoid global scope pollution
// good way at protecting the scope of your function and the variables within it
const num1 = 20;
const num2 = 30;

function add() {
    console.log(`the result is: ${num1 + num2}`);
}
add();

// anonymous function and immediately invoked
(function() {
    console.log('hello world');
})();

(function() {
    const num3 = 30;
    const num4 = 50;
    console.log(`the result is: ${num3 + num4}`);
})();
// pass arguments
(function(num1, num2) {
    console.log(`the result is: ${num1 + num2}`);
})(500,500);

//console.log(num3); - error, since it is not in global scope
console.log(num1);

// return and assign to variable
const result = (function (num1, num2) {
    console.log(`the result is: ${num1 + num2}`);
    return num1 + num2;
})(200,300);
console.log(result);

// Hoisting
// functions and var declarations are hoisted 
// safer to access only after initialized
display(); //function is called before the declaration
//console.log(firstName); //error
//console.log(lastName); //error
console.log(random); // var - can be accessed but value is not hoised and hence op: undefined

moreComplex(); //op: undefined

const firstName = 'Kavya';
let lastName = 'Sampath';
var random = 'random';

function display() {
    console.log('this function is being hoisted and no error');
}

function moreComplex() {
    console.log(`${random}`);
}


// Closure
// closures gives access to outer functions's scope from an inner function
// make private variables with closures
function outer() {
    let privateVar = 'secret';
    function inner() {
        console.log(`hello there secret is: ${privateVar}`); //inner function can access the outer function variables but the opposite is not true
    }
    return inner;
}

outer()(); //outer and inner functions are invoked
const value = outer();
console.log(value);
value(); //inner function is called with a variable

// Closure - Basic Example
function newAccount(name, initialBalance) {
    let balance = initialBalance;
    function showBalance() {
        console.log(`Hey, ${name}. You're balance is ${balance}`);
    }
    return showBalance;
}

newAccount('rajesh', 100)();

const latha = newAccount('latha',200);
const sampath = newAccount('sampath',400);

latha(); //the inner function remembers the values of the outer function variables
sampath();
*/

// Closure - Complex example
function newAccount(name, initialBalance) {
    let balance = initialBalance;
    function showBalance() {
        console.log(`Hey, ${name}. You're balance is ${balance}`);
    }
    function deposit(amount) {
        balance += amount;
        showBalance();
    }
    function withdraw(amount) {
        if(amount > balance) {
            console.log(`Hey, ${name}, sorry not enough funds`);
            return;
        }
        balance -= amount;
        showBalance();
    }
    return {showBalance: showBalance, deposit: deposit, withdraw: withdraw}; //object is returned, objects contains all the methods
}

const latha = newAccount('latha',200);
const sampath = newAccount('sampath',400);

latha.showBalance();
sampath.showBalance();

latha.deposit(400);
latha.withdraw(1000);
sampath.deposit(1000);