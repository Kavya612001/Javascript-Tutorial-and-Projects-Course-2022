/*
//Objects are collection of key, value pairs
// Objects have properties and methods

// object literal syntax - {}
// dot notation

const name = 'rajesh';
let random = 'random-value';
random = 'name';
const person = {
    name: name,
    age: 21,
    married: false,
    friends : ['nancy', 'sharmi', 'rajesh'],
    greet: function(name) {
        console.log(`Hello, my name is ${name}`);
    },
    sayHello(name) {
        console.log(`Hello, my name is ${name}`);
    },
    job: {
        title: 'developer',
        company: {
            name: 'Zuora',
            place: 'chennai'
        }
    },
    'random-value': 'random person'
};

console.log(person);
console.log(person.name);

person.age = 22;
console.log(person.age);

// adding a new property
person.city = 'vnr';
console.log(person);

// delete property
const friends = delete person.friends;
console.log(friends); //true means successfully deleted 
console.log(person);

// nested object accessing
console.log(person.job.company.name);

console.log(person.work); //op: undefined, since work is not a property in the object
// console.log(person.work.name); //op: error, since work is already undefined

console.log(person.job.title);
console.log(person.job.company.place);


// bracket notation
console.log(person["random value"]);
console.log(person["name"]);
console.log(person["firstName"]); //op: undefined

console.log(person[random]);


// this keyword
// points to the left of the dot 

const rajesh = {
    firstName: 'rajesh',
    lastName: 'dayalan',
    fullName: function() {
        console.log(this);
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    }
};
const kavya = {
    firstName: 'kavya',
    lastName: 'sampath',
    fullName: function() {
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    }
};
// this - points to the left of the dot 
rajesh.fullName();
kavya.fullName();

// this keyword advanced - in functions, this is referred to how a function is invoked
// defaults to global window objects - if nothing is present before the dot

//console.log(this); //op: winodw object 

function showThis() {
    console.log(this);
};

const rajesh = {
    name: 'rajesh',
    showThis: showThis
}
const kavya = {
    name: 'kavya',
    showThis: showThis
}

rajesh.showThis();  //here this will refer to rajesh object
kavya.showThis();
showThis(); //op: global window object is referred

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

btn1.addEventListener("click", showThis);
btn2.addEventListener("click", showThis);
btn2.addEventListener("click", function() {
    showThis(); //op: here window object is referred(global)
});


// factory functions - creates an object and returns it
function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: function() {
            console.log(`My full name is ${this.firstName} ${this.lastName} and I love JS`);
        }
    }
}

const latha = createPerson('premalatha', 'chandran');
latha.fullName(); 

const kavya = createPerson('kavya', 'sampath');
kavya.fullName();


// constructor functions - begins with a capital case, return keyword is not necessary
function Person(firstName, lastName) {
    this.firstName = firstName;
    this .lastName =  lastName;
    this.fullName = function() {
        console.log(`My full name is ${this.firstName} ${this.lastName} and I love React`);
    }
    console.log(this);
}
// new keyword is used to create object with constructor
const rajesh = new Person('Rajesh', 'Dayalan');
rajesh.fullName();

const kavya = new Person('Kavya', 'Sampath');
kavya.fullName();

// All objects in javascript have access to constructor property that returns a constructor function that created it
// constructor property
function Person(firstName, lastName) {
    this.firstName = firstName;
    this .lastName =  lastName;
    this.fullName = function() {
        console.log(`My full name is ${this.firstName} ${this.lastName} and I love React`);
    }
}
const kavya = new Person('Kavya', 'Sampath');
console.log(kavya.constructor);

const rajesh = {};
console.log(rajesh.constructor);

// arrays and functions in JS are also objects 
const list = [];
console.log(list.constructor);

const sayHi = function() {
    console.log('Hi..');
}
console.log(sayHi.constructor);

const sudharsan = new kavya.constructor('sudharsan', 's'); //kavya's instance constructor is used to create new obj for sudharsan
sudharsan.fullName();

// prototype property
// prototypal inheritance model - JS uses prototypal inheritance model. Every constructor function/class has a prototype prop that is shared by every instance of constructor/class
// any properties, methods or prototype can be accessed by every instance 
// prototype property returns a object 
function Account(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
    this.bank = 'HDFC bank'; // property lookup 
}

const sathish = new Account('sathish', 200);
const giri = new Account('giri', 300);

console.log(Account.prototype);
// property as a prototype
Account.prototype.bank = 'State Bank of India'; //for every instance in the prototype this bank will be added

// method as a prototype, this is applicable for every instance 
Account.prototype.deposit = function (amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
}

sathish.deposit(10);
giri.deposit(100);
console.log(sathish);
console.log(giri.bank);

// property lookup - if the child does not have ask parent, everything in JS is a object
console.log({});
console.log([]);

// ES6 class syntax - Syntactic sugar 
// prototypal inheritance 
class Account {
    constructor(name, initialBalance) {
        this.name = name;
        this.balance = initialBalance;
    }
    bank = "TMB"; //this will be present on each and every instance 
    deposit(amount) {
        this.balance +=amount;
        console.log(`Hello ${this.name}, your balance is ${this.balance}`);
    }
}

const kavya = new Account('Kavya', 0);
console.log(kavya);
console.log(kavya.name);
kavya.deposit(1000);
console.log(kavya);

const rajesh = new Account('Rajesh',0);
rajesh.deposit(200);
console.log(rajesh);


// call - runs instantly, arguments - list of items
const john = {
    name: 'John',
    age: 21,
    greet: function() {
        console.log(this);
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
    }
}
const susan = {
    name: 'susan',
    age: 23
}

john.greet();

function greet() {
    console.log('inside ordinary greet function');
    console.log(this); //refers to window object
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
}

const secondGreet = john.greet;
secondGreet(); //window object is returned

greet();

greet.call(john); //john object is passed to the greet function
greet.call(susan); //it also works, woww!!
greet.call({ name: 'rajesh', age:27 });

john.greet.call(susan); //this also works


// apply, arguments -runs instantly , arguments - array of items

const john = {
    name: 'John',
    age: 21,
}
const susan = {
    name: 'susan',
    age: 23
}
function greet(city, country) {
    console.log(this);
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old and I live in ${city}, ${country}`);
}

greet.call(john, 'san diego', 'us'); //list of items can be passed as an argument
greet.call(susan, 'san diego', 'us');
greet.call({name: 'rajesh', age: 27}, 'san diego', 'us');

greet.apply(john, ['san diego', 'us']); //array is passed as an argument
greet.apply(susan, ['san diego', 'us']);
greet.apply({name: 'rajesh', age: 27}, ['san diego', 'us']);

// bind - assign, use later, argument - list of items

// assign and call it later 
const susanGreet = greet.bind(susan, 'vnr', 'ind');
susanGreet(); //need to be invoked separately 
*/

// button example

const counter = {
    count: 0,
    increment() {
         console.log(this);
         this.count++;
         console.log(this.count);
    }
}

const btn = document.querySelector(".increment");

//fail
//btn.addEventListener("click", counter.increment); //op: NaN, since this keyword will point to the btn and not to the count which is to be incremented

// some edge cases - when the callback function in the Event listener is removed, it will cause some issues
//btn.addEventListener("click", counter.increment.bind(counter)); //this will refer to the counter object now

// this is the perfect solution
const increment = counter.increment.bind(counter);
btn.addEventListener("click", increment);
btn.removeEventListener("click", increment);

