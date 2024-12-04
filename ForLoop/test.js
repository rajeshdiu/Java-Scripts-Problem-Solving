
 let output = '';

 // Loop through numbers from 1 to 100
 for (let i = 1; i <= 100; i++) {
    
     output += `<div class="number">${i}</div>`;
 }

 document.getElementById('output').innerHTML = output;


 function generateTable() {
    
    const number = document.getElementById('numInput').value;
    const outputDiv = document.getElementById('output2');
    
    // Clear any previous output
    outputDiv.innerHTML = '';
    
    // Check if the user input is valid
    if (number === '' || isNaN(number)) {
        outputDiv.innerHTML = 'Please enter a valid number.';
        return;
    }

    // Use a for loop to generate the multiplication table
    for (let i = 1; i <= 10; i++) {
        // Calculate the result of the multiplication
        const result = number * i;
        
        // Create a new div for each line in the table and display the result
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');
        resultDiv.innerHTML = `${number} x ${i} = ${result}`;
        
        // Append the result div to the output div
        outputDiv.appendChild(resultDiv);
    }
}