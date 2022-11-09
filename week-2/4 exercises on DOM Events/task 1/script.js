// task 1
//Add an event handler that makes this box center itself directly under the user's mouse pointer as it is moved across the screen.

const el = document.body.querySelector('div');

const mouseMove = (event) => {
    el.style.left = event.pageX + 'px';
    el.style.top = event.pageY + 'px';
};
document.addEventListener('mousemove', mouseMove);


