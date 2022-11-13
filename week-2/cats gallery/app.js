const images = document.getElementsByTagName('img');
const imgArr = Array.from(images);
let index = 0;

function moveImages() {
    setTimeout(() => {
        imgArr[index].classList.remove('onscreen');
        imgArr[index].classList.add('hidden-left'); 
        index++;
        if(index === images.length){
            index = 0; 
        } 
        imgArr[index].classList.add('onscreen');
        moveImages();
    }, 3000);
}
moveImages();

document.addEventListener('transitionend', (event) => {
    // console.log('Transition ended');
    // console.log(event.target);
    let imagesEl = event.target;
    if (imagesEl.classList.contains('hidden-left')){ //check if imageElement has 'hidden-left' class
        imagesEl.classList.remove('hidden-left'); // if yes remove the hidden left class
    }
});

//solve in css the wierd part
//remove one transition ...
///navigation
//will cancel settimeout

