const inputTextScreen = document.querySelector('.input-text');
const acButton = document.querySelector('.ac');
const NumberButtons = [...document.querySelectorAll('.number')];
const actionButtons = [...document.querySelectorAll('.action')];
const clearInputScreenButton = document.querySelector('.clear-input-screen');
const equalButton = document.querySelector('.equal');

// TODO:
//      1) Добавить поддержку скобок -- ()


// Number buttons (1, 2, 3, 4, 5... etc)
NumberButtons.forEach((button) =>{
    button.addEventListener('click', function() {

        console.log(button.textContent + " is clicked");
        console.log(inputTextScreen.textContent + button.textContent);

        inputTextScreen.textContent += button.textContent;
    });
});

// Action buttons (+, -, * ...)
actionButtons.forEach((button) => {
    button.addEventListener('click', function() {

        console.log(button.textContent + " is clicked");
        console.log(inputTextScreen.textContent + button.textContent);

        inputTextScreen.textContent += button.textContent;
    });
});

// clear input text screen (AC button)
clearInputScreenButton.addEventListener('click', function() {
    inputTextScreen.textContent = "";
});

equalButton.addEventListener('click', function() {
    inputTextScreen.textContent = eval(inputTextScreen.textContent);
});


