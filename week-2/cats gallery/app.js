const images = document.getElementsByTagName('img');// 1. const images = use getElementsByClass or getElementsByTagName or querySelectorAll
const imgArr = Array.from(images); //    to get all the images. Convert it to array with Array.from();
console.log(imgArr);
let index = 0; // 2. let index = 0 // have a running index to know which element we want to add/remove classes to


function moveImages() {
    setTimeout(() => {
        // 1. for current image (images[index]) :
        imgArr[index].classList.remove('onscreen'); // - remove onscreen class
        imgArr[index].classList.add('hidden-left'); // - add hidden-left class
        index++; // 2. increase the index
        // check if index is "overflowing"
        if(index === images.length){// if(index === images.length) 
            index = 0; // then set index to 0
        } 
        imgArr[index].classList.add('onscreen'); // 3. for next image (images[index])
        // - add onscreen class

        moveImages();
    }, 3000);
}
moveImages();



//How to remove the hidden left class. and at which time
document.addEventListener('transitionend', (event) => {
    console.log('Transition ended');
    console.log(event.target);
    const imageElement = event.target;
    //check if imageElement has 'hidden-left' class
        // if yes remove the hidden left class
    
});



//solve in css the wierd part
//remove one transition ...



///navigation
//will cancel settimeout

