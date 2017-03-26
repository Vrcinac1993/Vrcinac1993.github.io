var initialSign;
var o = [];
var x = [];
var emptyFields = 9;
var gameSettings = document.getElementById("gameSettings");
var scorePointX = 0;
var scorePointO = 0;

var endingText = document.getElementById("gameOver");

var winningCombos = [
    ['00','01','02'], // 1 , 2 , 3
    ['01','11','21'], // 2 , 4 , 6
    ['00','11','22'], // 1 , 5 , 9
    ['00','10','20'], // 1 , 4 , 7
    ['10','11','12'], // 2 , 5 , 8
    ['20','21','22'], // 7 , 8 , 9
    ['20','11','02'], // 7 , 5 , 3
    ['02','12','22'] // 3 , 6 , 9
];

var scoreTable = document.getElementById("score");
var xScore = document.getElementById("playerX");
var oScore = document.getElementById("playerO");


function game(event) {

    o = [];
    x = [];
    emptyFields = 9;
    tbody.innerHTML = tmp;
    document.getElementById("table").style.pointerEvents = "auto";
    endingText.style.visibility = "hidden";
    document.getElementById("playAgain").style.visibility = "hidden";


    gameSettings.style.visibility = "hidden";
    backButton.style.visibility = "hidden";
    table.style.visibility = "visible";
    scoreTable.style.visibility = "visible";

    if (!initialSign){
        initialSign = event.target.innerHTML;
    }

}

function writeSign() {

    if (event.target.innerHTML == ""){
        event.target.innerHTML = initialSign;
        emptyFields -= 1;

        addPosition(initialSign, event.target.id);

        if(checkGame(o)) {
            scorePointO += 1;
            endingText.style.visibility = "visible";
            endingText.innerHTML = "Game over! O won";
            document.getElementById("table").style.pointerEvents = "none";
            document.getElementById("playAgain").style.visibility = "visible";
            oScore.innerHTML = "<span>" + "O : " +  scorePointO + "</span>";
        } else if (checkGame(x)) {
            scorePointX += 1;
            endingText.style.visibility = "visible";
            endingText.innerHTML = "Game over! X won";
            document.getElementById("table").style.pointerEvents = "none";
            document.getElementById("playAgain").style.visibility = "visible";
            xScore.innerHTML = "<span>" + "X : " + scorePointX + "</span>";
        } else {
            if (emptyFields === 0){
                endingText.style.visibility = "visible";
                endingText.innerHTML = "Game over! It was draw";
                document.getElementById("playAgain").style.visibility = "visible";
            }
        }
        flip();
    }
}

function checkGame(playerMoves) {
    var isWinner = false;
    var matchFound = 0;

    winningCombos.forEach(function (winningComb){
        winningComb.forEach(function (id) {
            playerMoves.forEach(function (playerMove) {
                if (id === playerMove) {
                    matchFound += 1;
                }
            });
        });

        if (matchFound === 3) {
            isWinner = true;
        }

        matchFound = 0;
    });

    return isWinner;
}

function flip (){
    if (initialSign == "X"){
        initialSign = "O";
    } else {
        initialSign = "X";
    }
}


function addPosition (sign, id) {
    if (sign === "X") {
        x.push(id);
    } else {
        o.push(id);
    }
}
