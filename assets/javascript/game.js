
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
'n','o','p','q','r','s','t','u','v','w','x','y','z'];

var rightGuess = 0;
var wrongGuess = 0;
var numberGuess = 9;

//LETTING THE COMPUTER DECIDE
var computerLetter = letters [Math.floor(Math.random() * letters.length)]; 

//ONLY FOR REFERENCE ON COMPUTER'S CHOICE
console.log(computerLetter);

//FUNCTIONS

document.onkeyup = function(event) {

 if (event.key === computerLetter) {
    rightGuess++;
 }
 
 else {
    wrongGuess++;
}
{numberGuess--}

document.getElementById('rightGuess').innerHTML = "Right: " + rightGuess;
document.getElementById('wrongGuess').innerHTML = "Wrong: " + wrongGuess;
document.getElementById('numberGuess').innerHTML = "Guesses left: " + numberGuess;

}

function result() {
   if (wrongGuess === 0) {
      document.getElementById('result').innerHTML = "You are the winner!";
}
}


//console.log(rightGuess);
//console.log(wrongGuess);
// console.log(numberGuess);

//document.getElementById('wins').innerHTML = "Wins: " + wins;
//document.getElementById('losses').innerHTML = "losses: " + losses;
// document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;


//console.log('number');

//PROCESS
// Declaring the variables: keyboard letters, results.
