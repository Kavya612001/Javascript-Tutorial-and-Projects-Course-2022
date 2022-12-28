/*
// var, let, const
// define, update, redefine
// const cannot mutate primitive type

// define
var number = 100;
console.log(number);
// update
number = 200;
console.log(number);
// redefine 
// sama variable name is used again with var, this is not possible w
var number = 'kavya';
console.log(number);

let amount = 100;
console.log(amount);
amount = 200;
console.log(amount);
//let amount = 'orange'; - error, cant be redefined

const total = 100;
 console.log(total);

// total = 200; error: assignment to constant variable

const person = {name: 'rajesh'}; //const object, but we can update the name
person.name = 'kavya';
console.log(person);

//person = {name: 'kavya'}; - error


// function scope and block scope
// let, const are block scoped - anything within {}
// var - function scoped

// global scope
var amount = 100;

function greet() {
    // local scope
    let random = 'random';
    console.log('hello there');
    console.log(amount);
    console.log(random);
}
 
greet();
//console.log(random); - error

var total = 1000;
let test = true;
if(test) {
    // local scope
    let total = 'oranges and onions';
    let value = 'some random value';
    console.log('hello there');
}
console.log(total);
// console.log(value); - error


// template strings `` - backticks
const name = 'rajesh';
const lastName = 'dayalan';
const age = 26;

const phrase = "My full name is "+ name + " " + lastName + " and I'm " + age + " years old.";
console.log(phrase);

const phrase2 = `${name}-${lastName.toUpperCase()}-${age}`
console.log(phrase2);

// template strings - HTML
const person = {
    name: 'Rajesh',
    job: 'Developer',
    hobbies: ['going out with friends', 'playing cricket', 'shopping']
};

const result = document.getElementById('result');
// result.innerHTML = "<h2>" + person.name + "</h2>" + "<p>" + person.job + "</p>";
result.innerHTML = `
<h2> ${person.name} </h2> 
<p> ${person.job} </p> 
<ul>${person.hobbies.map(item => {
    return `<li>${item}</li>`
}).join("")}</ul>
` 


// tagged template literals
const author = "some author";
const statement = "some statement";
// this is tagged template literal
const quote = highlight `Here is the ${statement} by ${author} and it could not be more true`;
console.log(quote);

const result = document.getElementById("result");
result.innerHTML = quote;

function highlight(text, ...vars) { //rest oeprator - variable number of arguments
    console.log(text, vars);
    const awesomeText = text.map((item, index) => {
        return `${item} <strong class="blue">${vars[index] || ""}</strong>`;
    });
    return awesomeText.join("");
}

// arrow functions - basics
// also called as fat arrow functions
// no name, always expression, assign to variable

// normal functions
// function sayHi() {
//     console.log("Hi");
// }
// sayHi();

// const hello = function(name) {
//     console.log(`Hello ${name}`);
// }
// hello("kavya");

// function triple(value1, value2) {
//     return value1 * value2 * 3;
// }

const sayHi = () => console.log('Hi');
sayHi();

// single param so no () is needed and no curly braces since only one line in the function 
// when there is only one line of code, arrow functions have explicit return 
const double = value => value * 2;
const num = double(4);
console.log(num);

// 2 params and more lines of code in function body
const multiply = (value1, value2) => {
    const result = value1 * value2;
    // more code here
    return  result;
}

const result = multiply(8,9);
console.log(result);

// return object - must be encloses in paranthesis
const object = () => (
    {name: 'kavya', age:21}
);
const person = object();
console.log(person);

// arrow functions can also be used as callback functions
const numbers = [1, 2, 3, 4, 5, 6];
const big = numbers.filter( num => num > 2);
console.log(big);

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => console.log('You clicked me'));



// arrow functions - objects and "this"
// reg function: 'this' refers parent, left of the dot 
// arrow function: refers to its current surrounding scope
const rajesh = {
    firstName: 'Rajesh',
    lastName: 'Dayalan',
    sayName: function() {
        console.log(this);
        const self = this;
        setTimeout(function() {
            console.log(this); //refers to the window object 
            console.log(self); // refers to rajesh object
            console.log(`Hello, My name is ${self.firstName} ${self.lastName}`); //undefined undefined 
        },2000);
        
    }
};

const kavya = {
    firstName: 'Kavya',
    lastName: 'Sampath',
    sayName: () => {
        console.log(this); //refers to the window object (surrounding scope)
        console.log(`Hello, My name is ${this.firstName} ${this.lastName}`);
    }
};

// with surrounding scope is object 
const latha = {
    firstName: 'premalatha',
    lastName: 'sampath',
    sayName: function() {
        console.log(this); //refers to latha object
        setTimeout( () => {
            console.log(this); //refers to latha object and not window object since setTimeout is within the scope of latha object
            console.log(`Hello, My name is ${this.firstName} ${this.lastName}`);
        }, 2000);
    }
}

latha.sayName();

//rajesh.sayName();
//kavya.sayName();


// arrow functions - selectElements and "this"
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    setTimeout(() => { //here this keyword refers to the btn object (surrounding scope, ordinary fn cant be used here)
        this.style.color = 'black';
    },3000);
});


// default Parameters and Hoisting
sayHi(); //hoisting
const kavya = 'Kavya';
const rajesh = 'Rajesh';

// default parameters
function sayHi(person = 'banu') {
    console.log(`Hi, ${person}`);
};

const sayHello = (person = 'Bob') => console.log(`Hello ${person}`);
sayHello(); //hoisting not possible in arrow functions


// array destructing
// faster and easier way to unpack values from arrays
// objects into variables

const fruits = ['apple', 'mango', 'orange', 'berry'];
const friends = ['nancy', 'sharmi', 'snekha', 'vanmathi', 'sura'];

const apple = fruits[0];
const mango = fruits[1];
const orange = fruits[2];
const berry = fruits[3];

console.log(apple, mango, orange, berry);

const [nancy, sharmi, snekha, vanmathi, sura] = friends;
// destructuring 
console.log(nancy, sharmi, snekha, vanmathi, sura);
console.log(nancy);
// put , comma if values are not needed
const [, , frnd3, frnd4, frnd5] = friends;
console.log(frnd3, frnd4, frnd5);

const [first, ,third, , ,] = friends;
console.log(first, third);


// swap variables
// destructuring swap variables
let first = 'kavya';
let second = 'rajesh';

// let temp = first;
// first = second;
// second = temp;

[first, second] = [second, first];
console.log(first, second);

let a = 10;
let b = 30;

[a,b] = [b,a];
console.log(a,b);


// object destructuring
const rajesh = {
    first: 'Rajesh',
    last: 'Dayalan',
    city: 'chennai',
    siblings: {
        brother: 'sathish'
    }
};

// console.log(rajesh);
// const firstName = rajesh.first;
// const lastName = rajesh.last;
// const brother = rajesh.siblings.brother;

// console.log(firstName, lastName, brother);

// firstName is the alias for first
const {first: firstName, last, city, zip, siblings: {brother: bro}} = rajesh;
console.log(firstName, last, city, zip, bro);

// destructuring function parameters
// we destruct in the parameter itself
function printPerson({first, last, city}) {
    //const {first, last, city} = person;
    console.log(first, last, city);
}
printPerson(rajesh);


// new string methods in ES6
// startsWith(), endsWith(), includes(), repeat()

const person = 'Peter Smith';
const employee = '23456-EMP-PETER-SMITH';
const manager = '23456-MAN-JOHN-DOE';

// startsWith
console.log(person.startsWith('Pe')); //case sensitive
console.log(employee.startsWith('EMP', 6)) //position of E - 6

// endsWith
console.log(manager.endsWith('DOE'));
console.log(manager.endsWith('MAN', 9)); // 9 - ending position

// includes
console.log(person.includes('er S'));
console.log(manager.repeat(2));

const multiplyPeople = (person, amount = 5) => person.repeat(amount);

const result = multiplyPeople(person, 3);
console.log(result);


// "for of" loop - loops through the values of an iterable object 
// String, Array, Map, Set etc - NOT OBJECT 
// unlike forEach 
const fruits = ['apple', 'orange', 'berry', 'cherry', 'peach'];
const longName = 'John Smith III';
let shortName = '';

for (const letter of longName) {
    if(letter === ' ') {
        continue;
    }
    console.log(letter);
}

for(const fruit of fruits) {
    if(fruit === 'berry') {
        break; //comes out of the loop
    }
    console.log(fruit);
}


// spread operator - basics
// allows an iterable to spread/expand individually inside receiver
// split into single items and copy them (we just copy them and not reference them)
const udemy = 'udemy';
const letters = [...udemy];
console.log(letters); //op: array of individual letters 

const boys = ['rajesh', 'muthu', 'hari'];
const girls = ['kavya', 'nancy', 'sharmi'];

const bestFriend = 'vivo';

const friends = [...boys, bestFriend, ...girls]; //we are copying and not referencing
console.log(friends);

// reference
const newFriends = friends; //instead do: const newFriends = [...friends ]
newFriends[0] = 'kathy';
console.log(newFriends); 
console.log(friends); // value is changed in the original array also


// spread operator - objects
const person = {
    name: 'rajesh',
    job: 'developer'
}

const rajesh = {...person, city: 'chennai', job: 'software developer'}; //new prop city is added and prop is overidded
console.log(rajesh);
console.log(person);


// spread operator - DOM Elements
// map method cannot be used on a node list
const headings = document.querySelectorAll("h1");
const result = document.getElementById("result");

//console.log(headings.map(item => console.log(item))); Error
const text = [...headings]
            .map(item => `<span>${item.textContent}</span>`)
            .join(" ");
result.innerHTML = text;


// spread operator - functional arguments
const numbers = [1,3,5,5,78,7898,5,43,324,454,32,3343,42,13,2343,23243,4542332,3]
console.log(Math.max(numbers));//op: Nan, we should numbers as single elements, so use the spread operator
console.log(Math.max(...numbers));
console.log(Math.max(4,5,6));

const kavya = ['Kavya', 'Sampath'];
const sayHi = (name, lastName) => {
    console.log(`hey, ${name} ${lastName}.`);
}

sayHi(kavya[0], kavya[1]);
sayHi(...kavya);


// rest operator (...), rest element must be last element
// gathers/collects the items
const fruits = ['apple', 'orange', 'berry', 'cherry'];
const [first, second,  ...rest] = fruits; //rest of the items are collected in rest array
console.log(first);
console.log(second);
console.log(rest);

// objects 
const person = {name: 'rajesh', lastName: 'dayalan', job: 'developer'};
// const {...restObj, job} = person; - error
const {job, ...restObj} = person;
console.log(job);
console.log(restObj);

const testScores = [90,33,24,56, 39];
const getAverage = (name, ...scores) => {
    let total = 0;
    for(const score of scores) {
        total += score;
    }
    console.log(`${name}'s average score is ${total / scores.length}`);
} 

getAverage('rajesh', 90,33,24,56);
getAverage('kavya', ...testScores); //we cant pass directly as array, only as rest we can pass


// Array.from and Array.of - NOT ON THE PROTOTYPE
// creates a new Array instance from a variable number of arguments
// Array.of
const example = ['one', 'two', 'three'];
console.log(example);
console.log(example.map);
console.log(example.from);
console.log(example.of);

const friends = Array.of('kavya', 'rajesh', 27); //converted to an array
console.log(friends);

// Array.from - String and Argumets Object
// from - returns Array Object from any object with a length property or an iterable object
// from turns an array- like/ish into array - string, nodeList, Set

const udemy = 'udemy';
console.log(Array.from(udemy)); // converts into an array of letters from the string

// argumets - array like object that has length and the array elemets
function countTotal() {
    console.log(arguments);
    let total = Array.from(arguments).reduce(  //converted into an array using Array.from then reduce function is applied
        (total,currNum) => total+=currNum,0 
        );
    console.log(total);
}
countTotal(67, 89, 54);
*/

