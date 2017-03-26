
var background = document.getElementById("background");
var backButton = document.getElementById("back");
var text = document.getElementById("playersText");
var one = document.getElementById("optionOne");
var two = document.getElementById("optionTwo");

text.innerHTML = "Welcome to Tic-tac-toe!";
one.innerHTML = "One Player" + "<br>" + "(coming soon)";
two.innerHTML = "Two Players";


function twoPlayers(){

    backButton.style.visibility = "visible";
    backButton.onclick = startMenu;

    text.innerHTML = "Player 1, would you like to be X or O?";

    one.innerHTML = "X";
    one.onclick = game;

    two.innerHTML = "O";
    two.onclick = game;
}


function startMenu (){

    document.getElementById("playAgain").style.visibility = "hidden";


    text.innerHTML = "Welcome to Tic-tac-toe!";
    one.innerHTML = "One Player" + "<br>" + "(coming soon)";
    two.innerHTML = "Two Players";

    one.onclick = "";
    two.onclick = twoPlayers;
    backButton.style.visibility = "hidden";
}

