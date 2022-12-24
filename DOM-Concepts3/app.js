/*
// events - to make the DOM more interactive
// select element, addEventListener(), what event and what to do

// click event
const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

// function reference can be used or we can pass as an anonymous function
function changeColors() {
    let hasClass = heading.classList.contains('red');
    if(hasClass) {
        heading.classList.remove('red');
    }
    else {
        heading.classList.add('red');
    }
}
btn.addEventListener('click', changeColors);
*/
// mouse events
// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - buttom is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    console.log('you clicked me');
});

btn.addEventListener('mousedown', function() {
    console.log('mouse down');
});

btn.addEventListener('mouseup', function() {
    console.log('mouse up');
});

btn.addEventListener('mouseenter', function() {
    heading.classList.add('blue');
});

btn.addEventListener('mouseleave', function() {
    heading.classList.remove('blue');
});


// key events
// keypress - when key is pressed 
// keydown - when key is down
//  keyup - when key is released
const nameInput = document.getElementById('name');
// nameInput.addEventListener('keypress', function() {
//     console.log('u pressed a key')
// });
// nameInput.addEventListener('keydown', function() {
//     console.log('key down')
// });
nameInput.addEventListener('keyup', function() {
    console.dir(nameInput.value);
});
