function checkLeapYear(){

    let year = parseInt(document.getElementById("year").value);

    if(isNaN(year) || year <= 0){

        document.getElementById("demo").textContent = "Please enter a valid year";
    } 

    else {

        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            document.getElementById("demo").textContent = year + " is a Leap Year!";
        } 
        else {
            document.getElementById("demo").textContent = year + " is not a Leap Year.";
        }
    }
}

function clearFields() {
    document.getElementById('year').value = '';
    document.getElementById('demo').textContent = 'Result will be displayed here';
}
