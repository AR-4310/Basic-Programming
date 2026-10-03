var inputNumber = document.getElementById("text");
var submit = document.getElementById("submit");
var result = document.getElementById("result"); 

var guess = Math.floor(Math.random() * (100 - 50 + 1) + 50);
var attempts = 0;

submit.onclick = function(){
    var currentGuess = parseFloat(inputNumber.value);
    if(isNaN(currentGuess) || inputNumber.value === "" || currentGuess < 50 || currentGuess > 100){
        result.innerHTML = "Please enter a valid number between 50 and 100.";
        return; 
    }
    attempts++;
    if(currentGuess < guess){
        result.innerHTML = "Your guess is too low.";
    }
    else if(currentGuess > guess){
        result.innerHTML = "Your guess is too high.";
    }
    else {
        result.innerHTML = "Congratulations! You guessed the number in " + attempts + " attempts.";
    }
}
