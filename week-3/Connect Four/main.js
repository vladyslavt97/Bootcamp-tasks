const columns = document.getElementsByClassName('column');
const slot = document.querySelectorAll('.slot');
const row = document.querySelectorAll('.row');

// 1. DEFINE GLOBAL VARIABLES
let holesElements = Array.from(document.querySelectorAll('.hole'));
let columnElements = Array.from(document.querySelectorAll('.column'));

let holes = [
    0, 0, 0, 0, 0, 0,  // first column
    0, 0, 0, 0, 0, 0,  // second column 
    0, 0, 0, 0, 0, 0,  // third column
    0, 0, 0, 0, 0, 0,  // fourth column
    0, 0, 0, 0, 0, 0,  // fifth column
    0, 0, 0, 0, 0, 0,  // sixth column
    0, 0, 0, 0, 0, 0,  // seventh column
];
let playerToMove = 1; //... more global variables
let numOfColumns = 7;
let numOfRows = 6;
let gameResult;

// 2. CREATE MULTIPLE EVENT LISTENER
for (let i=0; i < columns.length; i++){
    columns[i].addEventListener('click', () => {
        //check if  the game has ended
        ////columnElements[0]=>
        // console.log('column ',i + 1);
        const result = fillColumn(i);
        const successful = result.success;
        const filledIdx = result.filledIdx;
        if (result === true){//2. check if filling a column was successful and //if it was successful:
            const hasColumnWin = checkColumnWin(i);
            const hasRowWin = checkForRowWin();
            const hasDiagonalWin = checkForDiagonalWin();
            // const hasDraw = checkForDraw();
            // if (hasColumnWin || hasRowWin || hasDiagonalWin){
            //     //write game result variable
            //     //use at least allert function to show winner
            // } else if (isDraw){
            //     //use at least allert
            // }
            //check if game has ended and log winner or draw.
            //return { success: true; filledIdx: i};
            if (playerToMove === 1){
                playerToMove = 2;
            }else if(playerToMove === 2){
                playerToMove = 1;
            }
        }else{ //if it was not successful:
            return; //we do nothing
        }   
    });
    //return {success: false} after for loop
}


function fillColumn(columnIndex){
    const startIdx = columnIndex * numOfRows;
    const endIdx = startIdx + numOfRows; 
    for (let i=startIdx; i < endIdx; i++){
        if (holes[i] === 0){
            holes[i] = playerToMove;
            holesElements[i].classList.add('player' + playerToMove);
            return true;//{ success: true}
        }
    } return false;
}

function checkColumnWin(columnIdx){
    const startIdx = columnIdx * numOfRows;
    const endIdx = startIdx + numOfRows; 
    let countChips = 0;
    let lastChip;
    for (let i=startIdx; i < endIdx; i++){
        if(holes[i] === 0){
            return false;
        } else if (holes[i] !== lastChip){
            lastChip = holes[i];
            countChips = 1;
        }else{
            countChips++;
        }
        if (countChips === 4){
            console.log('Player ', holes[i], ' win');
            return true;
            
        }       
    }
    return false;
}

function checkForRowWin(filledIdx){
    const startIdx = filledIdx%numOfColumns;
    const endIdx = numOfRows + numOfColumns; 
    let countChips = 0;
    let lastChip;
    for (let i=startIdx; i < endIdx; i+=numOfRows){
        if(holes[i] === 0){
            countChips = 0;
            return false;
        } else if (holes[i] !== lastChip){
            lastChip = holes[i];
            countChips = 1; 
        }else{
            countChips++;
        }
        if (countChips === 4){ 
            console.log('Player ', holes[i], 'win');
            return true;
        }       
    }
    return false;
}


function checkForDiagonalWin() {
    for (let i = 0; i < winIndices.length; i++) {
        const hasWin = winIndices[i].every(winIndex => {
            return holes[winIndex] === playerToMove;
        });
        if (hasWin === true){
            console.log('Player ', holes[i], 'win');
            return true;
        }
    }
    return false;
}


function checkForDraw(){
    for (let i=0; i < holes.length; i++){ // loop through whole holes array 
        if (holes[i] = 0){// check for zero and return false if zero was found
            return false;
        }
        return true;    
    }
}

const winIndices = [
    // starting from first row; second column
    [0, 7, 14, 21], // index 0
    [7, 14, 21, 28], // index 1
    [14, 21, 28, 35], // index 2

    // starting from first row; second column
    [6, 13, 20, 27], // index 3
    [13, 20, 27, 34], // index 4
    [20, 27, 34, 41], // index 5

    // starting from first row; third column
    [12, 19, 26, 33], // index 6
    [19, 26, 33, 40], // index 7

    // starting from first row; fourth column
    [18, 25, 32, 39], // index 8

    // starting from second row; first column
    [1, 8, 15, 22], // index 9
    [8, 15, 22, 29], // index 10

    // starting from third row; first column
    [2, 9, 16, 23], // index 11

    // starting from first row; 7th/last column
    [36, 31, 26, 21], // index 12
    [31, 26, 21, 16], // index 13
    [26, 21, 16, 11], // index 14

    // starting from first row; 6th column
    [30, 25, 20, 15], // index 15
    [25, 20, 15, 10], // index 16
    [20, 15, 10, 5], // index 17

    // starting from first row; 5th column
    [24, 19, 14, 9], // index 18
    [19, 14, 9, 4], // index 19

    // starting from first row; 4th column
    [18, 13, 8, 3], // index 20

    // starting from second row; 7th/last column
    [37, 32, 27, 22], // index 21
    [32, 27, 22, 18], // index 22

    // starting from third row; 7th/last column
    [38, 33, 28, 23], // index 23
];


// Later as well:
//  - working with own created JS objects which hold multiple information in one variable
//    example: let gameResult = { winner: 'player1', winningChips: [2,3,4,5] }
//    access winner for example with: gameResult.winner