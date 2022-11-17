function askForNumber() {
    var num = prompt('Please enter a number between 1 and 10');
    if (num >= 1 && num <= 10 && num == parseInt(num)) {
        console.log(num);
        return num;       
    }
    throw new Error('Bad number');
}


const germanNums = ["null", "Eins", "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun", "Zehn"];

function translateNumberToGerman(){

    try {
        let ger = askForNumber();
        germanNums[ger];
        alert(germanNums[ger]);
        // console.log('after askForNumber'); 
    } catch (e) {
        // console.log('in catch');
        translateNumberToGerman();
    }
    // console.log('after try catch');
}
translateNumberToGerman();
