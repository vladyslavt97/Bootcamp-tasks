//task 1
function each(items, callback){
    if (typeof items === "object"){ // is it array or object
        if (Array.isArray(items)){ // is it array
            console.log("it is an array");

            for(let i=0; i < items.length; i++){
                callback(items[i], i);
            }

        } else { // then it is an object
            console.log("is an Object");
            for(const property in items){
                callback(items[property], property);
            }
        }
    }else{
        console.log("no one cares");
    }
}
function myFunc(l, y){
    console.log("output", l,y);
}

each(['a', 'b'], myFunc);
each({a: 1, b: 2}, myFunc);



//task 2
const originalArray = [1, 2, 3];
console.log(originalArray); // [1, 2, 3]

const reversedArray = originalArray.reverse();
console.log(reversedArray); // [3, 2, 1]

//task 2 - save a copy with slice
const originalArray1 = [1, 2, 3];
const nonReversed = originalArray1.slice();
const reversedArray1 = nonReversed.reverse();

console.log(originalArray1); // [1, 2, 3]
console.log(reversedArray1); // [3, 2, 1]

// task 2 - with a function method
const originalArray2 = [1, 2, 3];
function task(){
    const nonReversed2 = originalArray2.slice();
    const reversedArray2 = originalArray2.reverse();
    console.log(nonReversed2);
    console.log(reversedArray2); 
}
task();


//task 3 
const arr = [1, 2, -1, -90, 10];
const lessThanZero = arr.filter(getLessThanZero => getLessThanZero < 0);
console.log(lessThanZero);


//task 3 with a function
function memeArr(){
    const lessThanZero = arr.filter(getLessThanZero => getLessThanZero < 0);
    console.log(lessThanZero);
}
memeArr();
