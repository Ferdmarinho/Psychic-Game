
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];


var computerLetter = letters [Math.floor(Math.random() * letters.length)]; 

console.log(computerLetter);

//Function
document.onkeyup = function(event) {


 if (event.key === computerLetter) {
 document.write('YOU ARE RIGHT')
 }
 else {
     document.write('YOU ARE WRONG')
 }
}


//console.log('number');

//PROCESS
// Declaring the variables: keyboard letters, results.
