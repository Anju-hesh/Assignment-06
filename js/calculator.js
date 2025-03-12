let firstOperand = null;
let operator = null; 

// ---------------------------------------- Button Clicked ----------------------------------------

function appendNumber(number) {
    let display = document.getElementById('input-text');
    display.value += number; 
}

document.getElementById('btn7').addEventListener('click', () => appendNumber(7));
document.getElementById('btn8').addEventListener('click', () => appendNumber(8));
document.getElementById('btn9').addEventListener('click', () => appendNumber(9));
document.getElementById('btn4').addEventListener('click', () => appendNumber(4));
document.getElementById('btn5').addEventListener('click', () => appendNumber(5));
document.getElementById('btn6').addEventListener('click', () => appendNumber(6));
document.getElementById('btn1').addEventListener('click', () => appendNumber(1));
document.getElementById('btn2').addEventListener('click', () => appendNumber(2));
document.getElementById('btn3').addEventListener('click', () => appendNumber(3));
document.getElementById('btn0').addEventListener('click', () => appendNumber(0));
document.getElementById('btn-dot').addEventListener('click', () => appendNumber('.'));

// ----------------------------------------------------- Operators -----------------------------------------------------

function handleOperator(selectedOperator) {
    let display = document.getElementById('input-text');
    
    if (display.value !== '') {
        firstOperand = parseFloat(display.value); 
        operator = selectedOperator;
        display.value = ''; 
    }
}

document.getElementById('btn-plus').addEventListener('click', () => handleOperator('+'));
document.getElementById('btn-minus').addEventListener('click', () => handleOperator('-'));
document.getElementById('btn-multiply').addEventListener('click', () => handleOperator('*'));
document.getElementById('btn-divide').addEventListener('click', () => handleOperator('/'));

// ----------------------------------------------------- Clear -----------------------------------------------------

function clearDisplay() {
    document.getElementById('input-text').value = '';
    firstOperand = null; 
    operator = null; 
}

document.getElementById('btnClear').addEventListener('click', clearDisplay);

// ----------------------------------------------------- Equal -----------------------------------------------------

function calculateResult() {
    let display = document.getElementById('input-text');
    
    if (firstOperand !== null && operator !== null && display.value !== '') {
        let secondOperand = parseFloat(display.value); 
        let result;

        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
            default:
                result = 'Error';
        }

        display.value = result; 
        firstOperand = result;
        operator = null; 
    }
}

document.getElementById('btn-equal').addEventListener('click', calculateResult);
