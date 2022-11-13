// const person = {
//     firstName: 'Vlad',
//     lastName: 'Tsurkanenko',
//     age: 25,
//     hobbies: ['programming', 'biking'],
//     '2Property': 'random value',
//     adress: {
//         street: 'Friedrichstr.',
//         number: 122,
//         city: 'Berlin'
//     }
// };

// console.log('Hi! My address is ' + person.adress.street + " "
// + person.adress.number + ", " + person.adress.city);

// // 08.11.12
// //Functions and functions instances

// // regular
// function sum (a,b){
//     return a+b;
// }

// //anonymous

// const sum = (a,b) => {
//     return a+b;
// }

// //or different syntax

// const sum = function (a,b){
//     return a+b;
// }

// //anonymous function as a callback function
// setTimeout(() => {
//     console.log('delay log');
// },1000);

// const log = () => {
//     console.log('delay log');
// }

// setTimeout(log, 1000);

// //constructor creates an instance/object of a function and its properties

// function CustomLogger(){
//     this.prefix = '2022-11-08'
//     this.log = (message) => {
//         console.log(this.prefix, message);
//     };
// }

// const logger = new CustomLogger();
// logger.log('Hi there'); //'2022-11-08 Hi there';

// //
// function largest(n, xs) {
//     let myArr = xs.sort((a, b) => {
//         return b - a;
//     });
//     console.log(myArr);
//     let subtractedEl = myArr.slice(0, n);
//     return subtractedEl;
// }
// console.log(largest(2, [7, 6, 5, 4, 3, 2, 1]));



/////////////ask!!!
// function squareDigits(num) {
//     let numToStr = num.toString();
//     let result = "";
//     for (let i = 0; i <= numToStr.length; i++) {
//         result += numToStr[i] ** 2;
//         // console.log(result)
//         // let toString = result.toString();
//         let parsedIn = parseInt(result);
//         // console.log(parsed);
//     } return parsedIn;
// }

// console.log(squareDigits(83));
