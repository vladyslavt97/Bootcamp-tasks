//After a mousedown (but before a mouseup), the bar should follow the mouse pointer on the x axis but never move out of the area defined by the left edge and right edge of the images. As the bar moves, the visible portions of the images should change correspondingly.


const container = document.getElementById('container');
const slider = document.getElementById('slider');
const foreground = document.getElementById('foreground');
// var drag = false;
console.log(foreground);

// console.log('container ', container.offsetWidth);
let mouseDown = () => {
    
    container.addEventListener('mousemove', mouseMove);
};
slider.addEventListener('mousedown', mouseDown);

let mouseMove = (event) => {
    // slider.style.left = container.offsetLeft - (event.pageX + 'px');
    // drag = true;
    var mousePosition = event.pageX - container.offsetLeft - slider.offsetWidth;
    if (mousePosition < -4 || mousePosition > 574){
        return;
    }
    slider.style.left = mousePosition + 'px';
    foreground.style.width = mousePosition + "px";
};

let mouseUp = () => {
    // drag = false;
    container.removeEventListener('mousemove', mouseMove);
};
document.addEventListener('mouseup', mouseUp);

