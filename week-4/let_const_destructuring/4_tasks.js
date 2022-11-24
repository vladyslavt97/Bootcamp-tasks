//1st task
// Write a function that takes an array as an argument and returns a new array containing all of the items that are in the array that was passed in but in reverse order.

const array1 = [1, 2, 3];

function reversedArray(arrayParameter){
    const [a, b, c] = arrayParameter;
    return [c, b, a];
}

console.log(reversedArray(array1));
console.log(array1);


//2nd task
// Write a function that takes two arrays as arguments and returns a new array containing all of the items in the two arrays passed to it.

const array2 = [1, 2, 3];
const array3 = [4, 5, 6];

function concatenatedArray(arr1, arr2){
    const concatanated = [...arr1, ... arr2];
    return concatanated;
}

console.log(concatenatedArray(array2, array3));
// console.log(array2, array3);


//3rd task
function logInfo(city) {
    const {name, country, population: numPeople} = city;
    // const name = city.name;
    // const country = city.country;
    // const numPeople = city.population;

    console.log(
        `${name} is in ${country} and has ${numPeople} inhabitants in it.`
    );
}
logInfo({ name: "Marseille", country: "France", population: 861635 });


//4th task
// Pretend that it is 2002 and rewrite the following hipster Javascript so it will work in Internet Explorer 5 and Netscape 4.

// let getNameAndCountry = ({name, country}) => [name, country];

function getNameAndCountry() {
    const myObj = {
        name: 'T',
        country: 'P'
    }
    return myArr = [myObj.name, myObj.country];
}
console.log(getNameAndCountry());


// let getRelocatedCity = (city1, city2={country: 'Germany'}) => {
//     let [, country] = getNameAndCountry(city2);
//     return {
//         ...city1,
//         country
//     };
// };

function getRelocatedCity(city1, function getNameAndCountry(city2){
    let city1 = {},
    let city2 = {
        country: 'Germany'
    };
    return city1 + city2;
})
getRelocatedCity();