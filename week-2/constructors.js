//task 1
/*Write a constructor called Rectangle that accepts two numbers (width and height) as parameters. 
Rectangle instances should have a method called getArea that returns the instance's width multiplied by its height. 
Write another constructor called Square that accepts one number (which will serve as both width and the height) as a parameter. 
Instances of Square should also have a getArea method but you should not rewrite the getArea function you wrote for Rectangle. 
Square instances should use the same getArea method that Rectangle instances do.*/

function Rectangle(width, height){ //constructor
    this.width = width; //assign width to this.width
    this.height = height;
    this.getArea = function() {  //method 
        return this.width * this.height;
    };
}
let rect = new Rectangle(4, 5);
console.log(rect.getArea()); //20



function Square(oneNumber){
    Rectangle.call(this, oneNumber, oneNumber);
}
let square = new Square(4);
console.log(square.getArea()); //16



// function Square(length){
//     // with _proto_ you can set the prototype of Square
//     this._proto_ = new Rectangle(length, length) //instance of rectengale
// }
// const square = new Square(5);
// console.log(square);





//task 2
/*Write a function called invertCase that expects a string as a parameter. This function should return a new string with all the same characters as the string that was passed in but with the cases of the alphabetic characters switched. Uppercase characters should become lowercase and lowercase letters should become uppercase. Characters that are not alphabetic should not change. The toUpperCase and toLowerCase methods that all strings have will come in handy here.*/

let invertCase = function(string){
    let newString = ""; //a new string is expected
    for(let i = 0; i<string.length; i++){ //target each letter to check the case
        if(string[i] === string[i].toLowerCase()){ //if an index = to lowerCase 
            newString += string[i].toUpperCase(); //add it to the newString but in upperCase.
        }else {
            newString += string[i].toLowerCase(); //otherwise convert an index to lowerCase.
        }
    }
    console.log(newString); 
    return newString; //functions needs a return
};
invertCase('Monday');
// let text = 'Monday';

// let swappedText = invertCase(text);

//bonus
/*Write a constructor called Countdown that accepts a single argument - the number of seconds to count down. It should be possible to call the start method of instances of Countdown to initiate the countdown. Once the countdown starts, it should count down to zero starting with the number that was passed to the constructor and logging each number to the console with a one second delay.*/
function Countdown(numOfSeconds){
    this.number = numOfSeconds;
    this.start = () => {
        if (this.number > 0){
            console.log(this.number); //exit strategy is needed base on this.number
            setTimeout(() => {
                this.number--;
                this.start(); //call start again
                
            },1000);  
                    
        }else{
            // exit strategy. do nothing anymore
            return;
        }
    };
}

var countDown = new Countdown(25);

countDown.start();




// function countDown(number) {
//     console.log(number);
//     const newNumber = number - 1;
//     if (newNumber > 0) {
//         setTimeout(() => {
//             countDown(newNumber);
//         },1000);
//     }
// }
// countDown(25);