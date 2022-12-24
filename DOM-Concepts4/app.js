/*
// event object 
const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
heading.addEventListener('click', function(event) {
    console.log(event.currentTarget); //op: the html element which is targeted
    console.log(this); //this can be used inste
});
btn.addEventListener('click', function(event) {
    // console.log(event.currentTarget); //op: the html element which is targeted 
    event.currentTarget.classList.add('blue');
    console.log(event.type);
});

// preventDefault() - when a empty link # is pressed it moves to the top of the page
// to prevent that we use the preventDefault() functionality 
const link = document.getElementById('link');
function someFunc(e) {
    e.preventDefault();
}
link.addEventListener('click', someFunc)

// current target vs target 
// currentTarget - always refers to the element to which the event handler has been attached to 
// target - identifies the element(HTML element) on which the event occurs

// even with the currentTarget we can traverse the DOM
const btns = document.querySelectorAll('.btn');
btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        console.log('Current target', e.currentTarget); //op: only the button and not the strong element when clicked
        console.log('target: ', e.target);
        e.target.style.color = 'green';
    });
});
*/

// event propagation - bubbling, capturing
// event propagation - order the events are fired
// event bubbling - clicked element first and then bubbles up -- default
// event capturing - fires at the root and fires until reaches target
const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e) {
    console.log('current target ', e.currentTarget);
    console.log('target ', e.target); //targets the link
    // if(e.target.classList.contains('link')) {
    //     console.log('you clicked on the link');
    // } 
}
function stopPropagation(e) {
    console.log('you clicked on the list item');
    e.stopPropagation();
}
list.addEventListener('click', showBubbling, {capture: true}); //when capture true argument is passed, the currenTarget is ordered and fired from the root
container.addEventListener('click', showBubbling, {capture: true});
document.addEventListener('click', showBubbling, {capture: true});
window.addEventListener('click', showBubbling, {capture: true});
