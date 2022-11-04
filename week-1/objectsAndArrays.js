//task 1
function each(param1, param2){
    if (typeof param1 === "object"){ // is it arraz or object
        if (Array.isArray(param1)){ // is it array
            console.log("it is an array");

            for(let i=0; i < param1.length; i++){
                param2(param1[i], i);
            }

        } else { // then it is an object
            console.log("is an Object");
            for(const property in param1){
                param2(param1[property], property);
            }
        }
    }else{
        console.log("no one cares");
    }
}
function myFunc(l, y){
    console.log(l,y);
}

each(['a', 'b'], myFunc);
each({a: 1, b: 2}, myFunc);



// each({a: 1, b: 2}, function(val, name) {
//        console.log('The value of ' + name + ' is ' + val);
//    });

// each(['a', 'b'], function(val, idx) {
//        console.log('The value of item ' + idx + ' is ' + val);
//    });

   



//task 2
const originalArray = [1, 2, 3];
console.log(originalArray); // [1, 2, 3]

const reversedArray = originalArray.reverse();
console.log(reversedArray); // [3, 2, 1]

////save a copy with slice
// const originalArray = [1, 2, 3];
// const helloWorld = originalArray.slice();
// const reversedArray = helloWorld.reverse();

// console.log(originalArray) // [1, 2, 3]
// console.log(reversedArray) // [3, 2, 1]


//task 3 
const arr = [1, 2, -1, -90, 10];
const lessThanZero = arr.filter(getLessThanZero => getLessThanZero < 0);
console.log(lessThanZero);// [-1, -90]