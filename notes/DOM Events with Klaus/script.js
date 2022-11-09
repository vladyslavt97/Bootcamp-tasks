// let btn = document.getElementById('button');
// let count = 0;

// ////anonynous function
// // btn.addEventListener("click", function () { 
// //     count++;
// //     console.log("user clicked " + count + " times");
// // });

// // console.log("btn", btn);

// //
// function onButtonClick(e){
//     count++;
//     console.log("user clicked " + count + " times");
//     e.stopPropagation();
// }

// btn.addEventListener("click",  onButtonClick);

// document.addEventListener("click", function() {
//     console.log("document was clicked");
// });

// console.log("btn", btn);


//Keydown event
// document.addEventListener('keydown', function(event){
//     // console.log("use just pressed a key", event); 
//     // console.log("event.keyCode", event.keyCode);
//     if (event.keyCode === 65){
//         console.log('user clicked on "a');
//         document.body.style.backgroundColor = "yellow";

//     }else {
//         console.log('you pressed something else "m');
//         document.body.style.backgroundColor = "red";
//     }
// });

////confirm to leave?
// var link = document.querySelector('a');
// console.log("link", link);

// link.addEventListener("click", function(event) {
//     if( confirm("leave the page?")){
//         console.log("leaving");
//         return;
//     } else {
//         console.log("staying on the page");
//         event.preventDefault();
//     }
// });

// //setting up listeneres for multiple selections
// var title = document.querySelector("h1");
// var buttons = document.querySelectorAll('button');

// // console.log("buttons", buttons);
// buttons.forEach(function(button){
//     button.addEventListener("click", function(event) {
//         console.log(event.target.id);
//         title.style.color = event.target.id;
//         var buttonColor = event.target.id;
//         title.style.color = buttonColor;
//     });
// });

// var input = document.body.querySelector("input");
// console.log("input", input);


// input.addEventListener("input", function(event){
//     console.log("input happening");
//     console.log("event.target.value", event.target.value);
// });

// input.value = "yeeeee";
