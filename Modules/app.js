// setup
// named export
import {random, people} from './utils/data.js'
// default imports
import showPeople  from './showPeople.js';
import get from './utils/getElement.js';
console.log(random);


const container = get(".container");
const btn = get(".btn");

// error for this case
const container1 = get(".container1");
console.log(container1);


btn.addEventListener("click", () => {
    container.innerHTML = showPeople(people);
});

