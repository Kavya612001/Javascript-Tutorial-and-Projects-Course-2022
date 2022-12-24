/*
document.write('Hello world'); //writes in the html document
alert('Hello World');
console.log('Hello world');

document.write({name: 'john'});
alert({name: 'john'});
console.log({name: 'john'});


// Variables
let name = 'Kavya'
console.log(name);

let address, zip, state;
address = '3rd cross street';
zip = '626001'
state = 'tamil nadu'
console.log(address, zip, state);

// const, let and var

var value = 'some value';
let name = 'john';
const lastName = 'Sampath';

console.log(value);
console.log(name);
console.log(lastName);

// Variables Challenge
const firstName = 'Kavya';
const last_name = 'Sampath Kumar';
let address = 'main street';
address = 'first street';

console.log(firstName);
console.log(last_name);
console.log(address);


// Strings 
const name = "John's course on javascript";
const name1 = 'John\'s course on javascript';
console.log(name);
console.log(name1);


const name = 'Kavya';
const lastName = 'Sampath'
const fullName = name+" "+lastName;
console.log("your full name is: "+fullName);


// String concat challenge
const street = 'Avvaiyar street';
const country = 'india';
const fullMailingAddress = street + " "+country;
console.log(fullMailingAddress);

// Numbers
const number = 34;
const number1 = 34.44;
const number2 = '24.3';
console.log(number);
console.log(number1);
console.log(number2);


// Numbers challenge
const score1 = 100;
const score2 = 90;
const score3 = 80;
const totalScore = score1+score2+score3;
const averageScore = totalScore/3;
console.log("total score: "+totalScore);
console.log("average score: "+averageScore);
const plates = 20;
const people = 7;
let remainingPlates = plates % people;
remainingPlates++;
console.log("There are "+ remainingPlates + " plates available");

// Implicit type conversion

const name = 'Kavya';
const lastName = 'Sampath';
const fullName = name + " "+ lastName;
console.log(fullName);

const value = name - lastName;
console.log(value); //op: NaN

let num1 = 10;
let num2 = '23';
const res = num1 + num2; 
console.log(res);


const randomNumber = 13;
document.querySelector('.form').addEventListener('submit', function(e) {
    e.preventDefault();
    let value = document.getElementById('amount').value;
    value = parseInt(value);
    console.log('Input value: ', value);
    console.log('Sum of two numbers: ', value + randomNumber);
})

// Data types - 7 total
// Primitive - String, Number, Boolean, Null, Undefined, Symbol
// Objects - Arrays, Functions, Objects 

// typeof - operator (typeof variable) (typeof value)

// String
const text = 'some text';
console.log(typeof text);
console.log(typeof 'Hello');
// Number
const num = 45;
console.log(typeof 34);
// Boolean
let value1 = true;
let value2 = false;
console.log(typeof value1);
console.log(typeof value2);
// Null
const result = null;
console.log(typeof result); //null is object, which is a bug in javascript
// Undefined
let val;
console.log(typeof val);
// Symbol (ES6) - piece of memory where you can store data
// Each symbol will point to different memory location
const s1 = Symbol();
const s2 = Symbol();
console.log(typeof s1);
console.log(s1 == s2);
const s3 = Symbol("hello");
const s4 = Symbol("hello");
console.log(s3);
console.log(s3 == s4);


// Arrays - 0 index based 
const friends = ['nancy', 'sharmi', 'muthu', 'hari', 'sudharsan', 'rajesh', 7];
console.log(friends);
console.log(friends[1]);
console.log(friends[7]);  //op: undefined
let bestFriend = friends[3];
console.log(bestFriend);
friends[6] = 'snekha';
console.log(friends);


// Arrays challenge
const firstFruit = 'apple';
const fruits = [firstFruit, 'orange', 'mango', 'berry' , 47];
console.log(fruits);
fruits[fruits.length - 1] = 'banana';
console.log(fruits);

// Functions - reduce redundancy

function hello() {
    console.log('Hello There Kavya');
    console.log('Hello There Rajesh');
    console.log('Hello There Nandha');
}

hello();
hello();

function hello(name) {
    console.log('Hello There '+ name);
}

hello('Nancy');
hello('Sharmi');
hello('utsav', 2); //note: it doesnt error out
const rajesh = 'Rajesh';
hello(rajesh);


function calculate(value) {
    return value*2.54;
}

const width = calculate(100);
const height = calculate(80);

const dimensions = [width, height];
console.log(dimensions);

// Function expression - assigning function to a variable
// Anonymous function
const add = function (num1, num2) {
    return num1 + num2;
};

const firstRes = add(12,1);
console.log(firstRes);

// Arrow functions
const multiply = (num1, num2) => num1*num2;
const res1 = multiply(12,2);
console.log(res1);


// Function challenge

function calculateTotal(subTotal, tax) {
    return subTotal + tax;
}

const order1 = calculateTotal(100, 10);
const order2 = calculateTotal(50, 10);
const order3 = calculateTotal(25, 10);

console.log(order1, order2, order3);

// Function expression
// Anonymous function
const calculateTotalF = function (subTotal, tax) {
    return subTotal + tax;
};
const orderF = calculateTotal(100, 10);
console.log(orderF);

// Objects - collection of properties and methods
// Key - value pairs, dot notation

const person = {
    name: 'Kavya',
    lastName: 'Sampath',
    age: 21,
    education: true,
    married: false,
    friends: ['rajesh','nancy','sharmi'],
    greeting() {
        console.log('Hello, my name is kavya');
    }
};
const age = person.age;
console.log(age);
person.name = 'Rajesh Dayalan';
console.log(person.name);
console.log(person.friends[0]);
person.greeting();

// Objects Challenge
const car = {
    make: 'India',
    model: 'Hundai',
    year: 2005,
    colors: ['white', 'black'],
    hybrid: false,
    dive() {
        console.log('Driving..');
    },
    stop() {
        console.log('Stopped..');
    }
};
console.log(car.make);
console.log(car.colors[0]);
car.dive();
car.stop();


// Conditional Statements
// >, <, >=, <=, ==, ===, !=, !==
const num1 = 6;
const num2 = 6;
const value = false;
if(!value) {
    console.log('Value is false');
}
if(num1 > num2) {
    console.log('First no is bigger than 1st');
}
else if(num1 >= num2) {
    console.log('First no is equal to second');
}
else if(num1 === num2) {
    console.log('Both numbers are equal');
}
else {
    console.log('Second no is bigger than 1st');
}

// Equality
const num1 = 6;
const num2 = '6';
const value = num1 == num2;
const value2 = num1 === num2 //Data type must also be same
const value3 = num1 != num2;
const value4 = num1 !== num2; //Data type is also compared

console.log(value);
console.log(value2);
console.log(value3);
console.log(value4);

// Logical Operators (|| - OR && AND , !)
const name = 'peter';
const age = 24;

if(name === 'bob' && age == 24) {
    console.log('Hello there user');
}
else {
    console.log('Wrong values');
}

// Switch statement
// dice values: 1-6
const dice = 4;
switch(dice) {
    case 1: 
        console.log('you got one');
        break;
    case 2: 
        console.log('you got two');
        break;
    case 3: 
        console.log('you got three');
        break;
    case 4: 
        console.log('you got four');
        break;
    case 5: 
        console.log('you got five');
        break;
    case 6: 
        console.log('you got six');
        break;
    default: 
        console.log('you didnt role a dice');
    
}

// Conditionals Challenge
const person1 = {
    name: 'Kavya',
    age: 18,
    status: 'resident'
};

const person2 = {
    name: 'Prema',
    age: 52,
    status: 'tourist'
}

if(person1.age >= 18 && person1.status === 'resident') {
    console.log('you are an adult and a resident');
}
else if (person1.age >= 18 && person1.status === 'tourist') {
    console.log('you are an adult and a tourist');
}
else {
    console.log('you are not an adult');
}

// While Loops
let amount = 10;
while (amount > 0) {
    console.log("I have "+ amount + " dollars and I'm going to the mall..");
    amount --;
}

// Do While Loops - runs atleast once and then checks the condition for further execution
let money = 0;
do {
    console.log('you have ' + money + ' dollars');
    money ++;
}
while(money < 10);


// For Loop - repeated runs the loop while the condition is true
let i;
for (i = 0; i< 10; i++) {
    console.log('and the number is: '+i);
}

for(let number = 11; number >=0; number -- ) {
    console.log('and the number is: '+number);
}

// String properties and Methods
let text = '  Kavya Sampath';
let result = text.length;
console.log(result);
console.log(text.toLocaleLowerCase());
console.log(text.toLocaleUpperCase());
// Strings are 0 index based 
console.log(text.charAt(result-1));
console.log(text.indexOf('a')); //it is case sensitive
console.log(text.indexOf('L')); //returns -1 if not found
console.log(text);
console.log(text.trim()); //removes the white space
text = text.trim();
console.log(text.startsWith('Kavya')); //returns true if the condition is satisfied
// Chaining methods
console.log(text.toLocaleLowerCase().startsWith('kavya'));
console.log(text.includes('avy'));
console.log(text.slice(0, 2)); //doesnt include the index 2
console.log(text.slice(-1)); 
console.log(text.slice(-3)); 

// Template Literals - ES6+
// `` backticks charac is used 
// Interpolation - ${} - insert expression value
const name = 'Rajesh';
const age = 26;
const sentence = "Hey, it's "+ name +' and he is '+ age +' years old..';
console.log(sentence);
const sentence1 = `Hey, it's ${name} and he is ${age} years old..And a simple calc ${4+7}`;
console.log(sentence1);


// Strings Challenge
// function fullName(firstName, lastName) {
//     return `${firstName} ${lastName}`.toLocaleUpperCase();
// }

// Function with object as parameter
function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`.toLocaleUpperCase();
}


console.log(fullName( { firstName: 'Kavya', lastName: 'Sampath' } ))
console.log(fullName( { lastName: 'Dayalan' , firstName: 'Rajesh' } ));


// Arrays Properties and Methods
let names = ['Rajesh', 'Kavya', 'Prema', 'Sampath', 'Zuora'];
// length
console.log(names.length);
console.log(names[names.length - 1]);
console.log(names[9]); //op: undefined

// concat arrays
let lastNames = ['Dayalan', 'Sampath', 'Chandran', 'Rajamanickam', 'Leeyo'];
let allNames = names.concat(lastNames);
console.log(allNames);

// reverse 
console.log(allNames.reverse());

// unshift - add items to the begining of the array
allNames.unshift('Susy');
allNames.unshift('Bella');
console.log(allNames);

// shift - removes items from the begining of the array
allNames.shift();
allNames.shift();
console.log(allNames);

// push - adds items at the end of the array
allNames.push('sathish');
allNames.push('akalyha');
console.log(allNames);

// pop - deletes item at the end of the array 
allNames.pop();
console.log(allNames);

//  splice - mutates the original array
const specificNames = allNames.splice(3,1); //removes from the original array
console.log(specificNames);
console.log(allNames);


// Exercise - FullName
const names = ['Rajesh', 'Kavya', 'Nancy', 'Vamsi'];
const lastName = 'Zuora';
let newArray = [];
for( let i = 0; i < names.length ; i++ ) {
    const fullName = `${names[i]} ${lastName}`;
    newArray.push(fullName);
} 
console.log(newArray);
console.log(names);


// Exercise - Calculate Total
const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
    let total = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        total += arr[i];
    }
    if(total > 100) {
        console.log(`whoa! you are spending way too much`);
        return total;
    }
    console.log(`you are good, total is less than 100`);
    return total;
}

const res = calculateTotal(gas);
const res1 = calculateTotal(food);
const randomTotal = calculateTotal([27, 6]);
console.log(
    {
        gas: res,
        food: res1,
        random: randomTotal
    }
)

// Value vs Reference
// primitive data types - string, number, boolean, null, undefined
// when assigning primitive data type to a variable and changing the value, the original value is not affected
// non-primitive data types - arrays, functions and objects
// when assigning non primitive data type to a varibele, changing the value also changes the original value since it is passed by reference
const number = 1;
let number2 = number;
number2 = 5;
console.log(`1st value: ${number}, 2nd value: ${number2}`);

let person = {name: 'bob'};
// let person2 = person;
let person2 = {...person}; //Spread operator to avoid orginal value change, gets the copy of the obj and not the original obj 
person2.name = 'Rajesh';
console.log(`1st person: ${person.name}, 2nd person: ${person2.name}`);


// Null and undefined - both represents no value
// undefined - js cannot find value for this
// null - developer sets the value
let number = 20 + null;
console.log(number); // op: 20
let number2 = 20 + undefined;
console.log(number2) // op: NaN

// Truthy and Falsy
const bool1 = true;
const bool2 = 2> 1;

if(bool1) {
    console.log(`Hey it works!`);
}
if(bool2) {
    console.log(`Hey it also works`);
}
// falsy values - "", '', 0, -0, NaN, false, null, undefined
const text = -0;
if(text) {
    console.log(`The value is truthy`);
}
else {
    console.log(`The value is falsy`);
}

// unary operator - typeof 
const text = 'Rajesh';
console.log(typeof text);
// secondary operator
let number = 2;
let number2 = 2 + 5;
// Ternary Operator
// condition ? (runs if true) : (runs if false)
const value = 1 < 0;
value ? console.log('value is true'): console.log('value is false');


// Global scope 
// any variable outside the code block is said to be in global scope
// can be accessed anywhere in the program
// Name collisions, we tend the modify the global scoper variables by mistake
let name = 'kavya';
name = 'rajesh';
console.log(`value of name: ${name}`);
function calculate() {
    // some code...
    console.log(`value of name in calculate fn: ${name}`);
    name = 'giri';
    function innerFn() {
        name = 'Inner fn';
        console.log(`value of name in inner fn: ${name}`);
    }
    innerFn();
}
calculate();
console.log(`value of name outside calculate fn: ${name}`);
if(true) {
    name = 'saranya';
    console.log(`value of name in if condition: ${name}`);
}

// Local scope - cannot access from outside the function
let name = 'Rajesh';
function calculate() {
    let name = 'Kavya'; //block scoped
    let age = 25;
    friend = 'nancy'; //when no keyword like const or let is present then its global scope
}
calculate();
// console.log(age); - error
console.log(friend);

if(true) {
    const special = 'special';
}
console.log(`my name is ${name} and I'm awesome`);
// console.log(special);


// Variable Lookup
const globalNumber = 5;

function add(num1, num2) {
    const globalNumber = 3;
    const result =  num1 + num2 + globalNumber;
    function multiply() {
        const globalNumber = 100;
        const multiplyResult = result * globalNumber;
        console.log(multiplyResult);
    }
    multiply();
    return result;
}
console.log(add(3,4));

// Callback Functions, Higher Order Functions
// Functions in Javascript are first class objects, we can pass it as an argument to other function, store it in a variable
// and also return functions from a function(closure)
// Higher order function - acceps another function as an argument or returns another function as a result
// Callback function - passed to another function as an argument and executed inside that function
function morning(name) {
    return `Good mrng ${name.toUpperCase()}`;
}
function afternoon(name) {
    return `Good an ${name.repeat(3)}`;
}
function greet(name, cb) {
    const myName = "kavya";
    console.log(`${cb(name)}, My name is ${myName}`);
}
greet('rajesh', morning);
greet('nandha', afternoon)


// Array Functions
// Iterate over an array - no for loop required
// accept callback function as an argument, calls call back fn against each and every item in a array, reference item in the callback parameter

const numbers = [0, 1, 2, 3, 4];

// show all numbers
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// forEach - does not return new array 
const person = [
    {name: 'Rajesh', age:26, position: 'software engineer'},
    {name: 'Kavya', age:21, position: 'software engineer'},
    {name: 'Sampath', age:62, position: 'superintendent'},
];

function showPerson(person) {
    console.log(person.position.toUpperCase());
}

// person.forEach(showPerson); //showPerson function is called for each and every element in the array
// callback function is anonymous here 
person.forEach(function(item) {
    console.log(item.position.toLowerCase());
});

// map - returns a new array
// if we have 4 items then the new array will also have 4 items
// does not change the size of the original array
// uses values from original array while making the new one
const person = [
    {name: 'Rajesh', age:26, position: 'software engineer'},
    {name: 'Kavya', age:21, position: 'software engineer'},
    {name: 'Sampath', age:62, position: 'superintendent'},
    {name: 'Premaltha', age: 52, position: 'teacher'}
];
// functions by default return undefined if we dont set up anything
const ages = person.map(function(person) {
    return  person.age + 20;
});
const newPpl = person.map(function(person) {
    return {
        firstName: person.name.toUpperCase(),
        oldAge: person.age + 10
    };
});
console.log(newPpl);
console.log(ages.join(' '));

const names = person.map(function(person) {
    return `<h1>${person.name}</h1>`;
});

document.body.innerHTML = names.join(' ');
console.log(names);


// filter - returns a new array
// can manipulate the size of the array 
// returns based on the condition
const person = [
    {name: 'Rajesh', age:26, position: 'software engineer2'},
    {name: 'Kavya', age:21, position: 'software engineer'},
    {name: 'Sampath', age:62, position: 'superintendent'},
    {name: 'Premaltha', age: 52, position: 'teacher'}
];

const youngPpl = person.filter(function(person) {
    return person.age <= 27;
});

console.log(youngPpl);

const softwareEngineer2 = person.filter(function(person) {
    return person.position === 'software engineer2';
})

console.log(softwareEngineer2);

// find -  does not return a new array 
// returns single instance - (in this case object)
// returns the first match, if not match is found - undefined
// great for getting unique value
const person = [
    {name: 'Rajesh', age:26, position: 'software engineer2', id:1},
    {name: 'Kavya', age:21, position: 'software engineer', id:1},
    {name: 'Sampath', age:62, position: 'superintendent', id:3},
    {name: 'Premaltha', age: 52, position: 'teacher', id:4}
];

const names = ['bob','susan', 'anna'];
console.log(names.find(function(name) {
    return name === 'susan';
}));
const onePerson = person.find(function(person) {
    return person.id === 3;
});
console.log(onePerson);
// filter for the same example - remember filter always returns a array
const person2 = person.filter(function(person) {
    return person.id == 1;
});
console.log(person2[0].name);

// reduce - iterates, call back function
// reduces to a single value - number, array, object 
// 1 param ('acc') - total of all calculations
// 2 param ('curr') - current iteration/value
const person = [
    {name: 'Rajesh', age:26, position: 'software engineer2', id:1, salary: 1000},
    {name: 'Kavya', age:21, position: 'software engineer', id:1, salary: 800},
    {name: 'Sampath', age:62, position: 'superintendent', id:3, salary: 500},
    {name: 'Premaltha', age: 52, position: 'teacher', id:4, salary: 600}
];
// always must return the acc 
// return type 0 for int, {} for obj ,..
const total = person.reduce(function(acc, curr) {
    console.log(`total: ${acc}`);
    console.log(`current money: ${curr.salary}`);
    acc += curr.salary;
    return acc;
}, 0);
console.log(total);

// Array Challenges
// Multiple Files
// Students array is present in data.js , it is linked in index.html above the app.js file
console.log(students);
sayName('Kavya');

// Map
const updatedStudents = students.map(function(student) {
    if(student.score >= 90)
        student.role = 'excellent student';
    else
        student.role = 'ordinary student';
    return student;
})
console.log(updatedStudents);

// Filter 
const highScores = students.filter(function(student) {
    return student.score >= 80;
    // 
    // Alternative methods
    // if(student.score >= 80)
    //     return student;
    // if(student.score >= 80) return student; --one liner
    // 
});
console.log(highScores);

// Find
const specificId = students.find(function(student) {
    return student.id = 1;
});
console.log(specificId);

// Reduce #1
const averageScore = students.reduce(function(acc,curr) {
    return acc += curr.score;
}, 0) / students.length;
console.log("Avg score of students: "+averageScore);

// Square Bracket Notation
const subject = 'history';
const total = {};
total[subject] = 'Some value'; //same as total.Maths = 'Some Value'
console.log(total);

// Reduce #2
// Here survey is an object becoz we need to return the favSub count
const survey = students.reduce(function(survey, student) {
    const favSub = student.favoriteSubject;
    if(survey[favSub]) {
        survey[favSub] += 1;
    }
    else {
        survey[favSub] = 1;
    }
    return survey;
}, {});
console.log(survey);

// Math Object - standard built in objects, always available
const number = 4.567;
const result = Math.floor(number);
console.log(result);

const result1 = Math.ceil(number);
console.log(result1);

const num = 64;
console.log(Math.sqrt(num));

const res = Math.PI;
console.log(res);

const res1 = Math.min(2,4,6,7,4,1); 
console.log(res1);

console.log(Math.max(3,456,768,89,42,222));
 //returns a number between 0 and 0.999999999... and never equal to 1
const random = Math.random();
console.log(random); 

// random no btw 1 to 10
const random1 = Math.ceil(Math.random() * 10);
console.log(random1); 


// Data Object  - global object

// const date = new Date();
const date = new Date('1/27/2023')
const month = date.getMonth();
console.log(month); //months are 0 index based, op: 11 - december
const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                'July', 'August', 'September', 'October', 'November','December'];
console.log(months[month]);

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ,'Friday', 'Saturday'];

const day = date.getDay(); //0- sunday , 1-monday ...
console.log(day);
console.log(days[day]); 
console.log(date.getFullYear());

const sentence =  `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`;
console.log(sentence);

document.body.innerHTML = sentence;
*/