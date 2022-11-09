//task 2
// As the user types visible characters into this field, the characters should be replaced with the characters in the corresponding position in the Gettysburg Address. (Note - you can get and set the text in a <textarea> through its value property.)

const longText = `Address Delivered at the Dedication of the Cemetery at Gettysburg
Abraham Lincoln
November 19, 1863
Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.

Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.`; 


let index = 0;// 0. create variable `const index = 0`; +
// 1. get textarea element with querySelector for example +
// 2. add event listener to textarea element with 'keydown' + 
// 3. call event.preventDefault() and increase index by one in the callbackfunction of the event listener
// 4. update the value of textarea with longText.substring(0, index);
let textArea = document.querySelector('textarea');// 1. get textarea element with querySelector for example
textArea.addEventListener('keydown', function (event) { //add event listener to textarea element with 'keydown'
    event.preventDefault();
    index++;
    textArea.value = longText.substring(0, index);
}); 


// Steps:
// 1. get textarea element with querySelector for example +
// 2. add event listener to textarea element with 'keydown' +
// 3. check how many chars our textarea has with `textarea.textContent.length`; -+
// 4. const newText = longText.splice(0, length);
// 5. textarea.textContent = newText;
// const textArea = document.querySelector('textarea');// 1. get textarea element with querySelector for example
// textArea.addEventListener('keydown', function (char) { //add event listener to textarea element with 'keydown'
//     // for(let i=0; i<longText.length; i++);
//     const char = textarea.textContent.length;
//     const newText = longText.splice(0, length);
//     textArea.textContent = newText;
// }); 






























// const deliveredAddress = document.querySelector('textarea');
// const actualValue = deliveredAddress.value;
// console.log(actualValue);
// // function onClick(){
// //     document.addEventListener("keydown", function () {
// //         for(let i = 0; i < actualValue.length; i++){
// //             actualValue[i].style.color = 'black';
// //         }
// //     });
// // }
// // onClick();


// //
// function onClick(){
//     const arrOfStrings = actualValue.split("");
//     for(let i = 0; i <= arrOfStrings.length; i++){
//         arrOfStrings[i].style.color = 'black';
//     }
// }

// document.addEventListener("keydown", onClick());