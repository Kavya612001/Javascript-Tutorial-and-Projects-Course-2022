/*
// AJAX, HTTP, API
// simple text

// add button
// once we click the button the page does not load, the content is rendered without page load
const btn = document.querySelector(".btn");
const url = './api/people.json';
btn.addEventListener("click", ()=> {
    getData(url);
})

function getData(url) {
    const xhr = new XMLHttpRequest();


    xhr.open('GET', url);
    xhr.onreadystatechange = function() {
        //console.log(xhr);
        if(xhr.readyState === 4 && xhr.status === 200) {
            // const text = document.createElement('p');
            // text.textContent = xhr.responseText;
            // document.body.appendChild(text);


            // JSON
            const data = JSON.parse(xhr.responseText); //converts string -> array of objects
            const displayData = data.map((item) => {
                return `<p>${item.name}</p>`
            }).join("");
            const element = document.createElement('div');
            element.innerHTML = displayData;
            document.body.appendChild(element);
        }
        else {
            console.log({
                status: xhr.status, 
                text: xhr.statusText,
                state: xhr.readyState
            });
        }
    }
    xhr.send();
}

//console.log('hello world'); //this runs first in the background


// fetch
const url = './api/people.json';
// const response = fetch(url);
// console.log(response);

// fetch(url).then((response)=>{
//     // response object
//     // useful prop and methods
//     // console.log(response);
//     // convert response into JSON data
//     // returns promise, so we need to chain the "then"
//     return response.json(); //converts the response into JSON
// }).then((data)=> { //accessing the promise 
//     console.log(data);
// }).catch((err) => console.log(err));

fetch(url)
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(err));



// fetch with function
const url = './api/people.json';

const btn = document.querySelector(".btn");
btn.addEventListener("click", ()=> {
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayItems(data))
    .catch((err) => console.log(err))
});

const displayItems = (items) => {
    const displayData = items.map((item) => {
        const {name} = item;
        return `<p>${name}</p>`;
    }).join("");
    
    const element = document.createElement("div");
    element.innerHTML = displayData;
    document.body.appendChild(element);
}
*/

// fetch - with async/await
const url = './api/people.json';

const btn = document.querySelector(".btn");
btn.addEventListener("click", async ()=> {
    try { //just to handle errors
        const response = await fetch(url);
        const data = await response.json();
        displayItems(data);
    } catch (error) { 
        console.log('error');
    }
    
});

const displayItems = (items) => {
    const displayData = items.map((item) => {
        const {name} = item;
        return `<p>${name}</p>`;
    }).join("");
    
    const element = document.createElement("div");
    element.innerHTML = displayData;
    document.body.appendChild(element);
}
// try/catch
//console.log(random); - error
// try {
//     console.log('hello');
//     console.log(random);
// } catch (error) {
//     console.log('error');
// }
// console.log('hey');

