//1
function logType(data){
    var dataType = typeof(data);

    if (dataType === "undefined"){
        console.log("undefined!");
    }else if(dataType === "null"){
        console.log("null!");   
    }else if(dataType !== dataType){ //I could not output the NaN in the test
        console.log("not a number!");
    }else if(dataType === "number"){
        console.log("number!");
    }else if(dataType === "string"){
        console.log("string!");
    }else if(dataType === "boolean"){
        console.log("boolean!");
    }else if(dataType === "BigInt"){
        console.log("bigint!");
    }else if(dataType === "function"){
        console.log("function!");
    }else if(dataType === "object"){
        console.log("object!");
    }else if(dataType === "array"){
        console.log("array!");
    }else{
        console.log("I have no idea!");
    }
}
logType();


//2
var a = {
    Berlin: 'Germany',
    Paris: 'France',
    'New York': 'USA'
};

var b = {};

for (var name in a){
    var value = a[name];
    b[value] = name;
}
console.log(b);



//3 +
for (let i = 10; i >= 1; i--){
    console.log(i);
}



