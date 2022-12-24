// Element.getBoundingClientRect() method returns a DOMRect object providing information abt the size of an element and its position relative to the view port
const btn = document.querySelector('.btn');
const box = document.querySelector('.box');
btn.addEventListener('click', function() {
    const values = box.getBoundingClientRect();
    console.log(values);
});

// Events - resize
// resize event fires when the document view (window) has been resized
window.addEventListener('resize', function() {
    console.log(this.window.innerWidth);
    console.log(this.window.innerHeight);
});