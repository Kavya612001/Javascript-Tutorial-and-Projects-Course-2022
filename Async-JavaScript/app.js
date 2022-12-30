/*
// synchronous
console.log(`im first`);
console.log(`im second`);
console.log(`im third`);

console.log(`im first`);
boilingWater();
console.log(`im third`);

function boilingWater() {
    console.log('boiling..');
    for(i = 0; i < 10000; i++) {
        console.log('still not done..')
    }
    console.log('done.');
}


// recipe example
boilWater();
console.log(`chop carrot`);
// boilWater();
// console.log('chop onion');
// for(let i = 0; i < 100000; i++) {
//     console.log('still busy');
// }


// callback hell - many callbacks chained together
function boilWater() {
    console.log('boiling..');
    // asynchronous 
    setTimeout(() => {
        console.log('done.');
        console.log('add carrots');
        setTimeout(() => {
            console.log('carrots done')
            console.log('add onions')
            setTimeout( () => {
                console.log('onion done');
            }, 500);
        }, 500);
        console.log('chop onion')
    }, 1000);
}



// callback hell - DOM example
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    setTimeout( () => {
        heading1.style.color = 'red';
        setTimeout( () => {
            heading2.style.color = 'green';
            setTimeout( () => {
                heading3.style.color = 'blue';
            }, 1000)
        }, 2000)
    }, 1000)
});


// promises - can be pending, resolved or rejected 
// then catch - pass another callback

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {});

const promise = new Promise( (resolve, reject) => {
    let value = false;
    if(value) { 
        resolve([1, 2, 3]);
    }
    else {
        reject(`there was a error, value is false`);
    }
});
promise.then( (data) => {
    console.log(data);
}).catch( (error) => {
    console.log(error)
});


// promise reject example

const btn = document.querySelector(".btn");
const container = document.querySelector(".img-container");
const url = "https://source.unsplash.com/random";
btn.addEventListener("click", () => {
    //console.log(loadImage(url));
    loadImage(url)
    .then(data => container.appendChild(data))
    .catch((err)=> console.log(err));
});

function loadImage(url) {
    return new Promise((resolve, reject)=>{
        let img = new Image();
        img.addEventListener("load", ()=>{
            resolve(img);
        });
        img.addEventListener("error", ()=>{
            reject(new Error(`Failed to load image from the source: ${url}`));
        });
        img.src = url;
    });
  
} 

// promises - DOM example
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    addColor(1000, heading1, 'red')
    .then(()=> addColor(2000, heading2, 'green'))
    .then(()=> addColor(1000, heading3, 'blue'))
    .catch((err) => console.log(err));
});

function addColor(time, element, color) {
    return new Promise((resolve, reject)=> {
        if(element) {
            setTimeout(() => {
                element.style.color = color;
                resolve();
            }, time)
        }
        else {
            reject(new Error(`There is no such element ${element} `));
        }
    });
}
*/

// async/await 
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
   
  const result = await displayColor() 
  console.log(result);
  
});

// async always returns a promise by default
async function displayColor() {
    try {
        await addColor(1000, heading1, 'red') //we wait for the promise to be resolved or rejected
        await addColor(2000, heading2, 'green')
        await addColor(1000, heading3, 'blue')
       }catch (error){
        console.log(error);
       }
       return 'hello';
}

function addColor(time, element, color) {
    return new Promise((resolve, reject)=> {
        if(element) {
            setTimeout(() => {
                element.style.color = color;
                resolve();
            }, time)
        }
        else {
            reject(new Error(`There is no such element ${element} `));
        }
    });
}