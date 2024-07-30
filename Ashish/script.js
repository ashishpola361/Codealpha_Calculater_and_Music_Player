let displayValue = '0';

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function toggleSign() {
    displayValue = (parseFloat(displayValue) * -1).toString();
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue.replace(/÷/g, '/').replace(/×/g, '*')).toString();
    } catch {
        displayValue = 'Error';
    }
    updateDisplay();
}

updateDisplay();