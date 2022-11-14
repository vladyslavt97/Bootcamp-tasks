
const dots = document.getElementsByClassName('dot');//1. const dots = get all dots

const images = document.getElementsByTagName('img');
const imgArr = Array.from(images);
let index = 0;
let id;
let transition;
function moveImages() {
    id = setTimeout(() => {
        imgArr[index].classList.remove('onscreen');
        imgArr[index].classList.add('hidden-left'); 
       
        dots[index].classList.remove('selected');  // remove the selected class

        index++;
        if(index === images.length){
            index = 0; 
        } 
        imgArr[index].classList.add('onscreen');
        dots[index].classList.add('selected'); // add the selected class to a specific dot

        moveImages();
    }, 3000);
}
moveImages();

document.addEventListener('transitionend', (event) => {
    // console.log('Transition ended');
    // console.log(event.target);
    transition = false;
    let imagesEl = event.target;
    if (imagesEl.classList.contains('hidden-left')){ //check if imageElement has 'hidden-left' class
        imagesEl.classList.remove('hidden-left'); // if yes remove the hidden left class
    }
});

  
for (let i=0; i < dots.length; i++){//create loop for every dot with (let i syntax)
    dots[i].addEventListener('click', () => {//create 'addEventListeere' for every loop
        console.log(dots[i]);//when the event has fired, log the index of the clicked dot
        if(transition === true || i === index){
            return;
        }
        dots[index].classList.remove('selected'); //remove selected
        images[index].classList.remove('onscreen'); //remove onscren
        images[index].classList.add('hidden-left'); 
        clearTimeout(id);
        index = i;
        images[index].classList.add('onscreen'); //add onscreen class based on the new index to images
        dots[index].classList.add('selected');//add selected class based on the new index to dots    
        
        moveImages();
    });
}

document.addEventListener('transitionstart', () => {
    transition = true;
});
