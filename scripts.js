// Levin Gatchailan

"use strict";


// LIGHT/DARK



















// __GUESSING GAME
 
function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    const randomNumber = Math.floor(Math.random() * 10) + 1;
  
    const resultText = document.getElementById("result");
    
    if (userGuess === randomNumber) {
        resultText.textContent = `Wahoo! ${randomNumber} is correct! You're a Super Star!`;
    }else{
        resultText.textContent = `Mama Mia! ${userGuess} is incorrect. The number was ${randomNumber}.`;
    }
}





// __PRODUCT DISPLAY

  


// __FORM VALIDATION











// 
// 
// 
// 
// ___________________EVENT HANDLERS_____________________




// Game
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener('click', checkGuess);
});


// Form Validation
document.getElementById("formSubmit").addEventListener("click", function(e){
    checkValidate();
    e.preventDefault();
});