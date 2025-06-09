const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}   

function calculateResult() {
    const safeDisplay = display.value.replace(/x/g, '*');
    
    if (/^[0-9+\-*/.() ]+$/.test(safeDisplay)) {
        try {
            const result = Function('"use strict";return (' + safeDisplay + ')')();
            display.value = result;
        } catch (e) {
            display.value = "Error";
        }
    } else {
        display.value = "Invalid Input";
    }
}


function clearDisplay() {
    display.value = "";
}