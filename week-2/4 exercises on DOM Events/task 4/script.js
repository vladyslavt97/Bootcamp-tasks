// task 4
// When the user clicks on the outer element its background color should change to a randomly selected color. However, if the user clicks on the inner element, the inner element's background color should change to a randomly selected background color but the outer element's background color should not change at all.

const divSquare = document.querySelector('#element');

function generateRandomVal() {
    return Math.floor(Math.random() * 256);
}


divSquare.addEventListener("click", function () {
    var r = generateRandomVal();
    var g = generateRandomVal();
    var b = generateRandomVal();

    let randomColor = "rgb(" + r + "," + g + "," + b + ")";
    divSquare.style.backgroundColor = randomColor;
});


//smaller-element
const divSquare2 = document.querySelector('#smaller-element');

function generateRandomVal2() {
    return Math.floor(Math.random() * 256);
}


divSquare2.addEventListener("click", function (event) {
    event.stopPropagation();
    var r = generateRandomVal2();
    var g = generateRandomVal2();
    var b = generateRandomVal2();

    let randomColor = "rgb(" + r + "," + g + "," + b + ")";
    divSquare2.style.backgroundColor = randomColor;
});