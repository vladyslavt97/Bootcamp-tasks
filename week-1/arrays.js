//task 1
each({
       a: 1,
       b: 2
   }, function(val, name) {
       console.log('The value of ' + name + ' is ' + val);
   }); // logs 'the value of a is 1' and 'the value of b is 2'

   each(['a', 'b'], function(val, idx) {
       console.log('The value of item ' + idx + ' is ' + val);
   }); // logs 'the value of item 0 is a' and 'the value of item 1 is b'

//task 1 solution
function each({a: 1, b: 2}, function(val, name) {
       console.log('The value of ' + name + ' is ' + val);
   });

   each(['a', 'b'], function(val, idx) {
       console.log('The value of item ' + idx + ' is ' + val);
   });







   

//task 2
const originalArray = [1, 2, 3];
console.log(originalArray); // [1, 2, 3]

const reversedArray = originalArray.reverse();
console.log(reversedArray); // [3, 2, 1]

//save a copy with slice
const originalArray = [1, 2, 3];
const helloWorld = originalArray.slice();
const reversedArray = helloWorld.reverse();

console.log(originalArray) // [3, 2, 1]
console.log(reversedArray) // [3, 2, 1]


//task 3 
const arr = [1, 2, -1, -90, 10];
const lessThanZero = arr.filter(getLessThanZero => getLessThanZero < 0);
    console.log(lessThanZero);// [-1, -90]