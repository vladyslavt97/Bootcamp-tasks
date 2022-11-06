//1st exercise
function sum(n) {
    let total = Number(n);
    for (let i = 1; i < arguments.length; i++){
        total += Number(arguments[i]);
    }
    return total;
}
console.log(sum(24, 45, 45));

 
//2nd exercise
setTimeout(function waitThenRun() {
    console.log('Hello!'); 
}, 1500);
setTimeout(function waitThenRun() {
    console.log('Goodbye!'); 
}, 3000);



//3rd exercise
function myFunction(num){
    if (num <= 0 || Number.isNaN(num)){
        return "ERROR";
    }else if (num >= 1000000){
        return num;
    }else{
        for(let num = 0; num > 1000000; num * 10);
    }
}

myFunction(10/"abc");







//bonus
let myTotaler = function() {
    let sum = 0;
    return function(num) {
        sum += num;
        return sum;
    };
};

let totaler = myTotaler();


console.log(totaler(1)); //1
console.log(totaler(2)); //3
console.log(totaler(5)); //8