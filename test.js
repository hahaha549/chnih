const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the second number: ", (num2) => {
        rl.question("Choose an operation (+, -, *, /): ", (operation) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            let result;

            if (operation === "+") {
                result = num1 + num2;
            } else if (operation === "-") {
                result = num1 - num2;
            } else if (operation === "*") {
                result = num1 * num2;
            } else if (operation === "/") {
                result = num2 !== 0 ? num1 / num2 : "Error! Division by zero is not allowed.";
            } else {
                result = "Invalid operation!";
            }

            console.log("Result:", result);
            rl.close();
        });
    });
});
