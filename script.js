function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    // Handle square operation
    if (value === '^2') {
        display.value += '**2';
        return;
    }
    
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Replace '^2' with '**2' for exponentiation
        const expression = display.value.replace('^2', '**2');
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
