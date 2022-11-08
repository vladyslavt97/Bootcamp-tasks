//Functions and functions instances

// regular
function sum (a,b){
    return a+b;
}

//anonymous

const sum = (a,b) => {
    return a+b;
}


//or different syntax

const sum = function (a,b){
    return a+b;
}

//anonymous function as a callback function
setTimeout(() => {
    console.log('delay log');
},1000);


const log = () => {
    console.log('delay log');
}

setTimeout(log, 1000);


//constructor creates an instance/object of a function and its properties

function CustomLogger(){
    this.prefix = '2022-11-08'
    this.log = (message) => {
        console.log(this.prefix, message);
    };
}

const logger = new CustomLogger();
logger.log('Hi there'); //'2022-11-08 Hi there';
