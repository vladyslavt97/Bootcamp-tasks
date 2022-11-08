//callback function will be executed right before the paint of the next frame
// requestAnimationFrame(() => {
//     console.log('log from reuqest animation frame');
// });
// console.log('after request animation frame');


// you specify a number when a callback function is executed
// setTimeout(() => {
//     console.log('log from setTimeout');
// }, 1000);

// function doSomethingOnEachPaint(){
//     requestAnimationFrame(() => {
//         console.log('log before paint');
//         doSomethingOnEachPaint();
//     });
// }

// doSomethingOnEachPaint();



const headlines = document.getElementById('headlines');
let firstLink = document.querySelector('a');
let widthOfHeadlines = headlines.offsetWidth;
let currentLeftValue = widthOfHeadlines; /* initally set to the width of headlines. will be changed in moveLeft function */
function moveLeft() { 
    if (headlines.offsetLeft + firstLink.offsetWidth < 0){ // check if sum of headlines.offsetLeft and firstLink.offsetWidth is smaller than 0  // if yes, do the following steps:
        headlines.removeChild(firstLink); // remove the firstLink from headlines
        headlines.appendChild(firstLink); // append firstLink to headlines with appendChild
        firstLink = document.querySelector('a');// get the current new first link with querySelector and save it to firstLink variable
        currentLeftValue = 0; // reset currentLeftValue to 0
        headlines.style.left = currentLeftValue + 'px'; // set headlines.style.left to the new value of currentLeftValue
    } 

    requestAnimationFrame(() => { // call requestAnimationFrame in move left
        // in the provided callback function of requestAnimationFrame you will:
        currentLeftValue--; // 1. decrease the  value of currentLeftValue by one 
        headlines.style.left = currentLeftValue + 'px'; // 2. set the left styling of the headlines element with the currentLeftValue
        moveLeft();// 3. call moveLeft again
    }); 
   
}
moveLeft();