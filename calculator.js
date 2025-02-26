let firstnumber;
let second_Number;
let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function askFirstNumber() {
    readline.question("Enter first number: ", (input1) => {
        firstnumber = parseFloat(input1);
        if (isNaN(firstnumber)) {
            console.log("Please enter a valid number.");
            askFirstNumber(); 
        } else {
            askSecondNumber();
        }
    });
}


function askSecondNumber() {
    readline.question("Enter second number: ", (input2) => {
        second_Number = parseFloat(input2);
        if (isNaN(second_Number)) {
            console.log("Please enter a valid number.");
            askSecondNumber(); 
        } else {
            operation(firstnumber, second_Number); 
        }
    });
}


function operation(firstnumber, second_Number) {
    readline.question("Choose an operation (/ , * , - , +): ", (operation) => {
        if (operation === "/" && second_Number !== 0) {
            console.log("Result: ", firstnumber / second_Number);
        } else if (operation === "*") {
            console.log("Result: ", firstnumber * second_Number);
        } else if (operation === "-") {
            console.log("Result: ", firstnumber - second_Number);
        } else if (operation === "+") {
            console.log("Result: ", firstnumber + second_Number);
        } else if (operation === "/" && second_Number === 0) {
            console.log("Error: Cannot divide by zero.");
        } else {
            console.log("Wrong operation.");
        }
        readline.close(); 
    });
}

askFirstNumber();
