const textarea = document.querySelector('textarea');
const btn = document.querySelector('button');
const deleteBtn = document.getElementById('delete');


textarea.value = localStorage.getItem('myinput');

btn.addEventListener('click', function(){
    try{
        localStorage.setItem('myinput', textarea.value);
    } catch {
        return;
    }
});


// or also
textarea.addEventListener('keyup', function(){
    try{
        localStorage.setItem('myinput', textarea.value);
    } catch {
        return; 
    }
});

deleteBtn.addEventListener('click', ()=>{
    textarea.value = '';
});
