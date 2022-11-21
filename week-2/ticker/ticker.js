const headlines = document.getElementById('headlines');
let firstLink = document.querySelector('a');
let widthOfHeadlines = headlines.offsetWidth;
let currentLeftValue = widthOfHeadlines; /* initally set to the width of headlines. will be changed in moveLeft function */
let id;
function moveLeft() { 
    if (headlines.offsetLeft + firstLink.offsetWidth < 0){ // check if sum of headlines.offsetLeft and firstLink.offsetWidth is smaller than 0  // if yes, do the following steps:
        headlines.removeChild(firstLink); // remove the firstLink from headlines
        headlines.appendChild(firstLink); // append firstLink to headlines with appendChild
        firstLink = document.querySelector('a');// get the current new first link with querySelector and save it to firstLink variable
        currentLeftValue = 0; // reset currentLeftValue to 0
        headlines.style.left = currentLeftValue + 'px'; // set headlines.style.left to the new value of currentLeftValue
    } 

    id = requestAnimationFrame(() => { // call requestAnimationFrame in move left
        // in the provided callback function of requestAnimationFrame you will:
        currentLeftValue--; // 1. decrease the  value of currentLeftValue by one 
        headlines.style.left = currentLeftValue + 'px'; // 2. set the left styling of the headlines element with the currentLeftValue
        moveLeft();// 3. call moveLeft again
    }); 
   
}
moveLeft();


///
const ticker = document.getElementById('ticker');

ticker.addEventListener(('mouseenter'), () => {
    cancelAnimationFrame(id);
    // headlines.style.textDecoration = 'underline';
});
ticker.addEventListener(('mouseleave'), () => {
    moveLeft();
    // headlines.style.textDecoration = 'none';
});


//*


//bonus NOT FINISHED (Martin is checking the solution)
//from left to right
const headlines2 = document.getElementById('headlines2');
const bottomTicker = document.getElementById('ticker2');
const allLinks = bottomTicker.querySelectorAll('a');
const arrayOfLinks = Array.from(allLinks);
let lastLink = arrayOfLinks.slice(-1);
let widthOfHeadlines2 = headlines2.offsetWidth;
let currentRightValue = widthOfHeadlines2; 
let id2;
function moveRight() { 
    const cutPoint = (headlines2.offsetWidth * -1) + ticker2.offsetWidth + lastLink.offsetWidth;
    if (headlines2.offsetRight + lastLink.offsetWidth < 0){
        headlines2.removeChild(lastLink); 
        headlines2.prepend(lastLink); 
        lastLink = arrayOfLinks.slice(-1);
        currentRightValue = 0;
        headlines2.style.right = currentRightValue + 'px'; 
    } 

    id2 = requestAnimationFrame(() => { 
        currentRightValue--; 
        headlines2.style.right = currentRightValue + 'px'; 
    }); 
}
moveRight();

const ticker2 = document.getElementById('ticker2');

ticker2.addEventListener(('mouseenter'), () => {
    cancelAnimationFrame(id2);
});
ticker2.addEventListener(('mouseleave'), () => {
    moveRight();
});

///

