/// BLACK MAN!!! my Task
let manPerson = document.getElementById("man");
let man = manPerson.getContext("2d");

man.beginPath();
man.strokeStyle = "black"; // color of the pen
man.lineWidth = 3; // thickness of the pen

man.beginPath(); // get ready to draw
man.moveTo(250, 70);
man.lineTo(250, 350);
man.stroke();

//left leg
man.beginPath();
man.strokeStyle = "green"; // color of the pen
man.lineWidth = 3; // thickness of the pen

man.beginPath(); // get ready to draw
man.moveTo(250, 349);
man.lineTo(100, 450);
man.stroke();


//right leg
man.beginPath();
man.strokeStyle = "red"; // color of the pen
man.lineWidth = 3; // thickness of the pen

man.beginPath(); // get ready to draw
man.moveTo(250, 349);
man.lineTo(400, 450);
man.stroke();

//left arm
man.beginPath();
man.strokeStyle = "orange"; // color of the pen
man.lineWidth = 3; // thickness of the pen

man.beginPath(); // get ready to draw
man.moveTo(250, 70);
man.lineTo(170, 130);
man.stroke();

//right arm
man.beginPath();
man.strokeStyle = "grey"; // color of the pen
man.lineWidth = 3; // thickness of the pen

man.beginPath(); // get ready to draw
man.moveTo(250, 70);
man.lineTo(330, 130);
man.stroke();


//head
man.beginPath();
man.fillStyle = "white";
man.fillStroke = 'black';
man.arc(250, 50, 20, 0, Math.PI * 2);
man.fill();
man.stroke();


//event listeren on a specific key numbers (4) with if
// up 38
// down 40
// left 37
// right 39

var positionX = 0;
var positionY = 0;
document.body.addEventListener("keydown", (event) => {
    if (event.keyCode === 39) {// right 39
        man.clearRect(0, 0, manPerson.width, manPerson.height);
        man.drawImage(manOriginal, positionX, positionY);
        positionX += 10;
    }else if (event.keyCode === 40) {// down 40
        man.clearRect(0, 0, manPerson.width, manPerson.height);
        man.drawImage(manOriginal, positionX, positionY);
        positionY += 10;
    }else if (event.keyCode === 37) {// left 37
        man.clearRect(0, 0, manPerson.width, manPerson.height);
        man.drawImage(manOriginal, positionX, positionY);
        positionX -= 10;
    }else if (event.keyCode === 38) {// up 38
        man.clearRect(0, 0, manPerson.width, manPerson.height);
        man.drawImage(manOriginal, positionX, positionY);   
        positionY -= 10;
    }
});



//manOriginal
const manOriginal = document.getElementById("manOriginal");
let manO = manOriginal.getContext("2d");
manO.beginPath();
manO.strokeStyle = "black"; // color of the pen
manO.lineWidth = 3; // thickness of the pen

manO.beginPath(); // get ready to draw
manO.moveTo(250, 70);
manO.lineTo(250, 350);
manO.stroke();

//left leg
manO.beginPath();
manO.strokeStyle = "green"; // color of the pen
manO.lineWidth = 3; // thickness of the pen

manO.beginPath(); // get ready to draw
manO.moveTo(250, 349);
manO.lineTo(100, 450);
manO.stroke();


//right leg
manO.beginPath();
manO.strokeStyle = "red"; // color of the pen
manO.lineWidth = 3; // thickness of the pen

manO.beginPath(); // get ready to draw
manO.moveTo(250, 349);
manO.lineTo(400, 450);
manO.stroke();

//left arm
manO.beginPath();
manO.strokeStyle = "orange"; // color of the pen
manO.lineWidth = 3; // thickness of the pen

manO.beginPath(); // get ready to draw
manO.moveTo(250, 70);
manO.lineTo(170, 130);
manO.stroke();

//right arm
manO.beginPath();
manO.strokeStyle = "grey"; // color of the pen
manO.lineWidth = 3; // thickness of the pen

manO.beginPath(); // get ready to draw
manO.moveTo(250, 70);
manO.lineTo(330, 130);
manO.stroke();


//head
manO.beginPath();
manO.fillStyle = "white";
manO.fillStroke = 'black';
manO.arc(250, 50, 20, 0, Math.PI * 2);
manO.fill();
manO.stroke();
