const items = [...document.querySelectorAll(".number")]; //nodelist -> array

// arrow functions must be defined before calling it, hoisting doesnt work with arrow functions
const updateCount = (el) => {
    const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value / 1000);
    let initialValue = 0;
 
    const increaseCount = setInterval( () => {
        initialValue += increment;

        if(initialValue > value) {
            el.textContent = `${value}+`;
            clearInterval(increaseCount);
            return;
        }
        el.textContent = `${initialValue}+`
    }, 1);
}

items.forEach( (item) => {
    updateCount(item);
});

