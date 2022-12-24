/*
// Event propagation
const container = document.querySelector('.container');
const heading = document.querySelector('.heading');
const btn = document.querySelector('.btn');

function sayHello() {
    console.log('hello there');
}
btn.addEventListener('click', function() {
    const element = document.createElement('h1');
    element.classList.add('heading');
    element.textContent = 'im inside the container';
    container.appendChild(element);
});
//heading.addEventListener('click', sayHello);
// for dynamically created elements, event listeners cant be added directly , so we can use the concept of event bubbling
container.addEventListener('click', function(e) {
    if(e.target.classList.contains('heading')) {
        console.log('helloo');
    }
})


// forms

// submit event listener, prevent default, how to get a value
const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

// default behaviour of the form is it send the data to the server
form.addEventListener('submit', function(e) {
    e.preventDefault(); //page is also not refreshed 
    console.log('form submitted');
    console.log(name.value);
    console.log(password.value);
})

// local storage
// web storage api - provided by browser
// session storage and local storage
// setItem, getItem, removeItem, clear

localStorage.setItem('name','john');
localStorage.setItem('name','rajesh'); //it will be overrided
localStorage.setItem('friend', 'kavya');
localStorage.setItem('job', 'software engineer');
localStorage.setItem('address', 'street 123');

const name = localStorage.getItem('name');
console.log(name);
const friend = localStorage.getItem('friend');
console.log(friend);

localStorage.removeItem('name'); // this key value pair will be removed

sessionStorage.setItem('name','john');


// local storage with multiple values
// JSON.stringify(), JSON.parse()
const friends = ['rajesh','nancy','sharmi'];
// frinds is stored as an array instead of friends since we use json stringify
localStorage.setItem('friends',JSON.stringify(friends)); 
// we parse it to view the elements based on array based index
const values = JSON.parse(localStorage.getItem('friends'));
console.log(values[0]);

let fruits;
if(localStorage.getItem('fruits')) {
    fruits = JSON.parse(localStorage.getItem('fruits'));
}
else {
    fruits = [];
}
console.log(fruits);
fruits.push('apple');
fruits.push('orange');
localStorage.setItem('fruits',JSON.stringify(fruits));


// setTimeout
function sayHello() {
    console.log('hello');
}

setTimeout(sayHello, 1000); //hello is prined after 1 second = 1000ms
// setTimeout(sayHello(), 1000); - this is wrong way of doing it

// alternative - ES6 arrow function
setTimeout(function() {
    console.log('rajesh..')
}, 2000)

function showScore(name, score) {
    console.log(`hello ${name}, your score is ${score}`);
}
// passing arguments

const firstID = setTimeout(showScore, 3000, 'kavya', 97);
const secondID = setTimeout(showScore, 1000, 'rajesh', 94);
console.log(firstID);
console.log(secondID);

clearTimeout(firstID);  //this wont happen

// setInterval
function showScore(name, score) {
    console.log(`hey ${name}, you're score is ${score}`);
}
const firstID = setInterval(showScore, 1000, 'rajesh', 89); //for every 2 secs, this function will be executed
const secondID = setInterval(showScore, 4000, 'nancy', 90); //for every 2 secs, this function will be executed

clearInterval(firstID);


// Events - DOMContentLoaded
// the DOMContentLoaded event fires when the initial HTML document has been completely loaded
//and parsed without waiting for stylesheets, images and sub frames to finish loading
window.addEventListener('DOMContentLoaded', function() {
    const heading = this.document.querySelector('h1');
    console.log(heading);
    heading.style.color = 'red';
});


// Events - load
window.addEventListener('load', function() {
    console.log('load event listener')
    const img = this.document.querySelector('img');
    console.log(img);
    console.log(img.width);
});

window.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded')
    const img = this.document.querySelector('img');
    console.log(img);
    console.log(img.width);
});
// Events - scroll - on element or document
// scrollY - returns the number of pixels the document is currently scrolled along the vertical axis(pageYoffset)
// scrollX - returns the number of pixels scrolled along the horizontal axis (pageXOffset)

//we can use these methods only when we have something to scroll on the page
window.addEventListener('scroll', function() {
    console.log(window.screenY + 'px');
    console.log(window.scrollX + 'px')
});
*/
// Width, Height, GetBoundingClientRect

// innerWidth - the read only window property, shows the interior width of the window in pixels
// innerHeight - the read only property of the window interface that returns the interior height of the window in pixels
console.log('height: '+ window.innerHeight);
console.log('width: '+window.innerWidth);
