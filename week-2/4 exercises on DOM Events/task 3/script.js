//task 3
//When the user mouses down on this box, its background should change to a randomly selected color. When the user mouses up on it, its background should change to another randomly selected color.

const divSquare = document.getElementById('element');

function generateRandomVal() {
    return Math.floor(Math.random() * 256);
}


document.addEventListener("mousedown", function () {
    let r = generateRandomVal();
    let g = generateRandomVal();
    let b = generateRandomVal();

    let randomColor = "rgb(" + r + "," + g + "," + b + ")";
    divSquare.style.backgroundColor = randomColor;
});

document.addEventListener("mouseup", function () {
    let r = generateRandomVal();
    let g = generateRandomVal();
    let b = generateRandomVal();

    let randomColor = "rgb(" + r + "," + g + "," + b + ")";
    divSquare.style.backgroundColor = randomColor;
});