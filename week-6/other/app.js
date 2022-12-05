function cakes(recipe, available) {
    const recipeNamesArr = Object.keys(recipe);
    const availableNamesArr = Object.keys(available);
    const matchingIngredientsOfArrays = recipeNamesArr.filter(element => availableNamesArr.includes(element));
    // console.log('matchingIngredientsOfArrays',matchingIngredientsOfArrays);
    let longNum = [];
    let quotient;
    let result;
    if (recipeNamesArr.length > availableNamesArr.length){
        return 0;
    } else if (recipeNamesArr.length === matchingIngredientsOfArrays.length){
        const recipeValuesArr = Object.values(recipe);
        const availableValuesArr = Object.values(available);
        // console.log('recipeValuesArr',recipeValuesArr);
        // console.log('availableValuesArr',availableValuesArr);
        for (let i=0; i<recipeValuesArr.length; i++){
            // console.log(recipeValuesArr[i]);
            quotient = Math.floor(availableValuesArr[i] / recipeValuesArr[i]);
            longNum = longNum + quotient;
        }
        // console.log(longNum);
        const arrStr = longNum.split('');
        const minN = Math.min(longNum);
        console.log('minNum', minN);
        if (minN === 0){
            result = 0;
        } else {
            const minNumOfArr = Math.min(minN);
            result = minNumOfArr;
        } 
        return result;
           
    } else {
        return 0;
    }
}
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); 
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); 