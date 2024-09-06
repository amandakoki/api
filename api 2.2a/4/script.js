
function calculate() {

    const number1 = parseFloat(document.getElementById('number1').value); //basically typecasting. converting the numebrs into float
    const number2 = parseFloat(document.getElementById('number2').value); //we're converting them to float for division purposes
    const operation = document.getElementById('operation').value;

    if (isNaN(number1) || isNaN(number2)) { //checking to ensure the number was actually converted to a float
        alert('Please enter valid numbers');
        return;
    }


    let result;
    if (operation === 'add') {
        result = number1 + number2;
    } else if (operation === 'subtract') {
        result = number1 - number2;
    } else if (operation === 'multiply') {
        result = number1 * number2;
    } else if (operation === 'divide') {
        if (number2 === 0) { //handling the division by 0 error (limiting the types of errors encountered by the system)
            alert('Cannot divide by zero');
            return;
        }
        result = number1 / number2;
    }

    // Display the result
    document.getElementById('resultValue').textContent = result;

}


// handling forms in Dom

//difference bteween == and ===
//in the code below, == would return a true value, while === would return a false value
//reson: (read on the reason) !!

//let a = 5;
// let b = "5";

//console.log(a == b);
//console.log(a === b);