/*
// Basics
document.body.style.backgroundColor = 'blue';
document.body.style.color = 'white';
document.getElementById('btn').style.color = 'red';

// assign it to a variable
const element = document.getElementById('btn')
console.log(element);
// when multiple things needs to be done, assign it to a variable

// Window - global object 
console.log(window);

// returns a node object, which is a array like object 

const btn = document.getElementById('btn');
console.log("NodeName: "+btn.nodeName);
console.log(btn.style);


// window object - browser api
// document, alert all these comes under the window object 
// window object is searched by default by the browser 
// console.dir
console.log(window);
// alert('hello');
console.dir(document); //to find the properties and methods on the node object use this



// getElementById('element') - select an element or a group of elements that we want and decide the effect we want to apply for the selection
const h1Node = document.getElementById("title");
h1Node.style.color = 'violet';

const btnNode = document.getElementById('btn');
btnNode.style.backgroundColor = 'green';
btnNode.style.color = 'white';

// getElement by tag name('tagname')
// html collection - array like object 
// index, length property but not array methods (forEach)

const h2Node = document.getElementsByTagName('h2');
h2Node[0].style.color = 'pink';
h2Node[1].style.backgroundColor = 'yellow';
console.log(h2Node);

const listItems = document.getElementsByTagName('li');
listItems[2].style.color = 'blue';
//listItems.forEach(function (item) {}); - forEach leads to an error here and cant be used 

// querySelectorAll() is used in most cases
// NodeList - objects are collection of nodes - we can run forEach loop
// we can turn them into an array using the spread operator and use all array properties and methods
const betterItems = [...listItems]; //listNode is converted to an array
betterItems.forEach(function (item) {
    console.log(item);
});

console.log(listItems);
console.log(betterItems);


// get element by class name - select the element or grp of elements that we want
// decide the effect that we want to apply to the selection
// HTMLCollection 

const listItems = document.getElementsByClassName('special');
listItems[2].style.color = 'pink';
console.log(listItems);

// Query selector , querySelector('any css') - selects single 
// querySelectorAll('any css') - selects all

const result = document.querySelector('#result');
result.style.backgroundColor = 'yellow';

const items = document.querySelector('.special');
console.log(items);

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

const list = document.querySelectorAll('.special');
console.log(list);
// forEach can be used directly on the result 
list.forEach(function (item) {
    item.style.color = 'blue';
});


// Navigate the DOM - returns all childNodes including whitespace which is treated as a text node
const result = document.querySelector('#result');
const allChildren = result.childNodes; //a lot of whitespace is returned as text
console.log(allChildren);

const children = result.children;
console.log(children);

const firstChild = result.firstChild;
console.log(firstChild); //op: white space, since it selects from allChildNodes

const lastChild = result.firstChild;
console.log(lastChild); //op: white space


//parent element
const headingH3 = document.querySelector('h3');
 const parent = headingH3.parentElement;
parent.style.color = 'red';
// console.log(headingH3.parentElement.parentElement.parentElement.parentElement); //when there is no more parent ele, result is null

// nextSibling
const first = document.querySelector('.first');
const second = first.nextSibling.nextSibling.style.color = 'red'; //if we give only one nextSibling it will return a white space - text
// previousSibling
const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling.style.color = 'blue';

console.log(last.nextSibling.nextSibling); //null

// nextElementSibling
const first = document.querySelector('.first');
const second = first.nextElementSibling.style.color = 'green'; //ignores the white space
// previousElementSibling
const last = document.querySelector('#last');
const third = last.previousElementSibling.style.color = 'pink';


// textContent nodeValue
const specialItem = document.getElementById('special');
const value = specialItem.nodeValue;
console.log(value);
console.log(specialItem.firstChild.nodeValue);

const easyValue = specialItem.textContent; //easy way to retrieve the text
console.log(easyValue);


// getAttribute()
const first = document.querySelector('.link');
const className = first.getAttribute('class');
console.log(className);

const randomLink = document.getElementById('randomLink');
const showLink = randomLink.getAttribute('href');
console.log(showLink);

// setAttribute() - used to set class to an element 
const last = randomLink.nextElementSibling;
last.setAttribute('class', 'link');
last.textContent = 'i also have a class of link';
console.log(last);

const links = document.querySelectorAll('.link');
console.log(links);

// Adding css classes dynamically through js

const first = document.getElementById('first');
const firstClassName = first.className;
console.log(firstClassName);
const second = document.getElementById('second');
const third = document.getElementById('third');

// className
second.className = 'colors';
second.className = 'text'; //if we do like this, the class Name will be overridded

second.className = 'colors text'; //styles from both the classes will be applied 

// classList - preferred 
const classValue1 = third.classList;
console.log(classValue1);
// third.classList.add('colors');
// third.classList.add('text');
third.classList.add('text', 'colors')
console.log(classValue1);
third.classList.remove('text');

let result = third.classList.contains('text');
console.log(result); //returns a boolean value, if the class is present it returns true


// create element dynamically using JS
// createElement - createTextNode - appendChild
const result = document.querySelector('#resultChange');
console.log(result);

// create a empty element
const bodyDiv = document.createElement('div');

// create text node
const text = document.createTextNode('a simple body div');

bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv); //gets appended below the script tag in the body

// create a new h2 element
const h2Element = document.createElement('h2');
const textInH2 = document.createTextNode('im a new h2 element appended in the body of the DOM');
h2Element.appendChild(textInH2);
h2Element.classList.add('blue');
result.appendChild(h2Element);
console.log(result.children);
*/