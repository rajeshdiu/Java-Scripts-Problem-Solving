function performSummation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if(!isNaN(num1) && !isNaN(num2) ){
        const result = num1 + num2;
        document.getElementById('demo').textContent = `Summation is : ${result}`;
    }
    else{
        document.getElementById('demo').textContent = "Please Enter Value";
    }
}

function performMultiplication() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if(!isNaN(num1) && !isNaN(num2) ){
    const result = num1 * num2;
    document.getElementById('demo').textContent = `Multiplication is : ${result}`;
    }
    else{
        document.getElementById('demo').textContent = "Please Enter Value";
    }
}

function performSubtraction() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if(!isNaN(num1) && !isNaN(num2) ){
    const result = num1 - num2;
    document.getElementById('demo').textContent = `Subtraction is : ${result}`;
    }
    else{
        document.getElementById('demo').textContent = "Please Enter Value";
    }
}

function performDivision() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if(!isNaN(num1) && !isNaN(num2) ){
        if (num2 === 0) {
            document.getElementById('demo').textContent = "Error: Cannot divide by 0";
        } 
        else {
            const result = num1 / num2;
            document.getElementById('demo').textContent = `Division is : ${result}`;
        }

    }
    else{
        document.getElementById('demo').textContent = "Please Enter Value";
    }
}

function performModulus() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if(!isNaN(num1) && !isNaN(num2) ){
    const result = num1 % num2;
    document.getElementById('demo').textContent = `Modulus is : ${result}`;

    }
    else{
    document.getElementById('demo').textContent = "Please Enter Value";
    }
}

function clearFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('demo').textContent = 'Result will be displayed here';
}