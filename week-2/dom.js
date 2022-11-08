//task 1
function italicText(str){ //Write a function that expects a string representing a selector to be passed as a parameter.
    let paragraph = document.querySelectorAll(str);
    for(let element of paragraph){
        element.style.fontStyle = 'italic';
        element.style.fontWeight = 'bold';
        element.style.textDecoration = 'underline';
    //The function should find all the elements in the document that match the selector and change their style so that the text they contain is italic, underlined, and bold.
    }
    return paragraph;
}
italicText('p');


//task 2
// Write a function that expects a string representing a class name to be passed as a parameter. The function should return an array containing all the elements in the document that have the class that was passed in.
function arrayOfElements(string){
    const pro = document.getElementsByClassName(string);
    const someArray = Array.from(pro);
    return someArray;
} 
console.log(arrayOfElements('pro'));

// task 3 
function curentlyLoadedPage(){ // Write a function that inserts an element into the body of the currently loaded page.
    const el = document.createElement('p');
    // That element should have fixed position, z-index of 2147483647, left of 20px, top of 100px, font-size of 200px, and contain the text 'AWESOME'.
    el.style.position = 'fixed';
    el.style.zIndex = '2147483647';
    el.style.top = '100px';
    el.style.fontSize = '50px';
    el.style.color = 'gold';
    el.textContent = 'AWESOME';
    const box = document.querySelector('body');
    box.appendChild(el);
}
curentlyLoadedPage();
