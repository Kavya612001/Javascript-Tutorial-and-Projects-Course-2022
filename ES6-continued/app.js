/*
// Array.from - DOM Elements(NodeList)
const p = document.querySelectorAll('p');
const result = document.getElementById('result');
const second = document.getElementById('second');

let newText = Array.from(p);
newText = newText.map( item => `<span>${item.textContent}</span>`).join(" ");
result.innerHTML = newText;

// second argument of Array.from is a map function
const text = Array.from(document.querySelectorAll('p'), (item) => 
{ return `<span>${item.textContent}</span>`}
).join(' ');
second.innerHTML = text;

// find, findIndex, every, some

// find - gets specific item
// findItem - get's index of the item
// every - every item in the array
// some - at least one item

const people = [
    { id: 1, name: 'kavya'},
    { id: 2, name: 'latha'},
    { id: 3, name: 'sampath'}

];

// filter - returns a new array
const latha = people.filter( person => person.name === 'latha');
console.log(latha);
console.log(latha[0].name);
console.log(latha[0].id);

// find - if no items match, undefined is returned
const kavya = people.find( (person) => person.name === 'kavya'); //an object is returned
console.log(kavya);
console.log(kavya.name);

// findItem
const person = people.findIndex( (item) => item.id === 3);
console.log(person);
const newPeople = people.slice(0, person);
console.log(newPeople);


const grades = ['A', 'B', 'A', 'B', 'C'];
const goodGrades = ['A', 'B', 'A', 'B'];
// every
const allGoodGrades = grades.every( (grade) => grade !== 'C');
console.log(allGoodGrades); //false , becoz we have C in the array

const allGoodGrades1 = goodGrades.every( (grade) => grade !== 'C');
console.log(allGoodGrades1);  //true

// some
const oneBadGarde = grades.some( (grade) => grade === 'C');
console.log(oneBadGarde); //true , becoz we have C in the array


// "for in" loop
// used to iterate over object properties
// not advised to use in arrays, especially when order is important
// on arrays use "for of" loop

const person = {
    name: 'rajesh',
    age: 26,
    status: 'developer'
};

for (const propertyName in person) {
    console.log(`${propertyName} : ${person[propertyName]}`);
}

// Three methods to convert objects into arrays
// Object.keys() - converts property names into arrays
// Object.values() - converts property values into arrays 
// Object.enteries - coverts both 

// Object.keys() 
const person = {
    name: 'Kavya',
    age: 21,
    status: 'Student'
};

const keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'status']

// Object.values()
const values = Object.values(person);
console.log(values); // ['Kavya', 21, 'Student']

// Object.entries()
const entries = Object.entries(person);
console.log(entries);  // Array of arrays 
console.log(entries[0][1]);
/*
(3) [Array(2), Array(2), Array(2)]
0
: 
(2) ['name', 'Kavya']
1
: 
(2) ['age', 21]
2
: 
(2) ['status', 'Student']
*/
/*
// map method
const newResult = entries.map( (item) => {
    const [first, second] = item;
    console.log(first, second)
    return first;
});
console.log(newResult); //op: ['name', 'age', 'status']

// for of loop - array destructuring is done in the for of loop itself
for(const [first, second] of entries) {
    // const [first, second] = item;
    console.log(first, second)
}


// Set Object - stores a collection of unique values of any type

// iterators
// enteries(), keys(), values(), forEach()

// new Set()
const unique = new Set(); 
const random = 'random'
// add(value)
unique.add('first');
unique.add('second');
unique.add('first');
unique.add('third');
unique.add('first');
unique.add(random);
unique.add(4);

// delete(value)
const result = unique.delete(4);
console.log(result); //true if the element is present, false if item is not in the set

// has(value)
const isValue = unique.has('first');
console.log(isValue);  // true if the object is present , else it retuns false

// clear()
unique.clear(); //removes all elements from the set


console.log(unique); // we store only the unique values

const products = [
    {
        title: 'high-back-bench',
        company: 'ikea'
    },
    {
        title: 'albany table',
        company: 'macros'
    },
    {
        title: 'accent chair',
        company: 'caressa'
    },
    {
        title: 'wooden table',
        company: 'ikea'
    }
];

// const companies = products.map( (item) => item.company)
// console.log(companies);


// // newSet() - accepts iterable objects
// const uniqueCompanies = new Set(companies);
// console.log(uniqueCompanies);

// const finalCompanies = ['all',...uniqueCompanies];
// console.log(finalCompanies); //converted into array using the spread operator

const resultCompanies = ['all', ...new Set(products.map( (item) => item.company))]; //all in one line
console.log(resultCompanies); 
*/

// String.includes - checks if a string contains another string
const firstName = 'Rajesh';
const res = firstName.includes('Raj', 1); //case sensitive comparision , second param - position
console.log(res) //true

const product = {
    title: 'Leather Chair'
};

const result = product.title.includes('Le');
console.log(result);

const products = [
    {title: 'Modern Poster'},
    {title: 'Bar Stool'},
    {title: 'Armchair'},
    {title: 'Leather Chair'}
];

const text = 'le';
const filteredProducts = products.filter( (product) => {
    return product.title.toLocaleLowerCase().includes(text)
});
console.log(filteredProducts);

// Array.includes - checks if the item is in the array or not
// used in the conditional statements
const groceries = ['milk', 'bread', 'meat', 'jam'];

let randomItem = 'jam';
const isIncluded = groceries.includes(randomItem); //optional second param can be given which is the starting position
console.log(isIncluded);

if(groceries.includes(randomItem)) {
    console.log(`Yeah! ${randomItem} is on the list`);
}
