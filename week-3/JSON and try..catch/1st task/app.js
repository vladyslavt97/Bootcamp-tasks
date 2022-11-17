// Make a JSON validator website. It should have a <textarea> where users can input their JSON. 
//After clicking a button a message should appear, telling users if the JSON is valid or not.

const btn = document.querySelector('button');
const textarea = document.body.querySelector('textarea');
let textValue;

document.addEventListener('keyup', ()=>{
    textValue = textarea.value; 
    // console.log('textValue:', textValue);
});

btn.addEventListener('click', () => {
    // console.log('textValue:', textValue);
    try {
        let parsed = JSON.parse(textValue);
        console.log(parsed);
        alert('valid');
    }  catch (e) {
        alert('nope');
    }
});