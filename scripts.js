// Levin Gatchailan

"use strict";


// __LIGHT/DARK
const toggleButton = document.getElementById("toggleButton");
let darkModeOn = false;

function toggleMode() {
    const body = document.body;
    darkModeOn = !darkModeOn;

    if(darkModeOn){
        body.classList.add("darkMode");
    }else{
        body.classList.remove("darkMode");
    }
}

toggleButton.addEventListener("click", toggleMode)


// __GUESSING GAME
function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const randomNumber = Math.floor(Math.random() * 10) + 1;
  
    const resultText = document.getElementById('result');
    
    if (userGuess === randomNumber) {
      resultText.textContent = `Congratulations! ${randomNumber} is the correct number!`;
    } else {
      resultText.textContent = `Sorry, ${userGuess} is incorrect. The number was ${randomNumber}. Try again!`;
    }
}




// __PRODUCT DISPLAY

function toggleDisplay(){
	document.querySelector("#displaySoon product").classList.toggle("hidden");

}



// __FORM VALIDATION
const form = document.getElementById("siteForm");
const fullName = document.getElementById("fullName");
const phoneNumber = document.getElementById("phoneNumber");
const emailAddress = document.getElementById("emailAddress");
const comments = document.getElementById("comments");
const errorSpan = document.getElementById("errors");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let errors = [];

    // Full name validation
    if (!fullName.value) {
        errors.push("Full name is required");
    }

    // Phone number validation
    if (!phoneNumber.value) {
        errors.push("Phone number is required");
    }else if(!isValidPhoneNumber(phoneNumber.value)) {
        errors.push("Invalid phone number");

    }

    // Email address validation
    if (!emailAddress.value) {
        errors.push('Email address is required');
    }else if(!isValidEmailAddress(emailAddress.value)) {
        errors.push('Invalid email address');
    }

    // Comments validation
    if (!comments.value.trim()) {
        errors.push('Comments cannot be empty');
    }

    // Preferred contact method validation
    const preferredContact = document.querySelector('input[name="pref-contact"]:checked');
    
    if (!preferredContact) {
        errors.push('Please select a preferred contact method');

    }

    if (errors.length) {
        errorSpan.textContent = errors.join(', ');
    }else{
        form.submit();
    }
});

function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
}

function isValidEmailAddress(emailAddress) {
    const emailRegex = /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\.-]+)\.([a-zA-Z]{2,5})$/;
    return emailRegex.test(emailAddress);
}


// 
// 
// 
// 
// ___________________EVENT HANDLERS_____________________
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", checkGuess);
});