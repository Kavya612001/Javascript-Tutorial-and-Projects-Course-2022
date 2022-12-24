/*
const result = document.querySelector('.red');
const bodyDiv = document.createElement('div');
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
// insertBefore(element, location)
document.body.insertBefore(bodyDiv, result);


const smallHeading = document.createElement('h2');
const smallHeadingText = document.createTextNode('a h2 element is added');
smallHeading.appendChild(smallHeadingText);
// replaceChild(newChild, oldChild)
document.body.replaceChild(smallHeading, bodyDiv);

// prepend innerText
const heading = document.createElement('h2');
heading.innerText =  `i am a dynamic heading`;
document.body.prepend(heading);


// remove 
const result = document.querySelector('#result');
//result.remove();
// removeChild
const heading = result.querySelector('h1');
console.log(heading);
result.removeChild(heading);


// innerHTML and textContent
const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(div.textContent);

console.log(list.innerHTML); //returns the whole html
console.log(list.textContent);

const randomVar = 'randomValue'
const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">new list item</li> <li>${randomVar} item</li>`;
document.body.appendChild(ul);

div.textContent = 'changed as inner text';
div.innerHTML = 'changed with inner html';


// change css with style property
const random = document.querySelector('.random');
//the below is redundant and not recommended, use classList instead
// random.style.backgroundColor = 'blue';
// random.style.color = 'white';
// random.style.fontSize = '3rem';
// random.style.textTransform = 'capitalize';
random.classList.add('title');
*/

