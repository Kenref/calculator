function operate(a, operator, b) {
    if (operator === "+") {
        return a + b;
    }
    else if (operator === "-") {
        return a - b;
    }
    else if (operator === "x") {
        return a * b;
    }
    else if (operator === "÷") {
        return a / b;
    }
}

const outputBox = document.getElementById("outputBox");
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const decimalButton = document.getElementById("decimal");

let a = "", middle = "", b = "", runningTotal = 0;
let operatorClicked = false;
let decimalActivated = false;


numberButton.forEach(number => {
    number.addEventListener("click", addNumber)
    window.addEventListener("keydown", addNumber)
})

function addNumber(e) {
    if (e.type === "click") {
        if (operatorClicked) {
            b += e.target.classList[1];
            outputBox.textContent += e.target.classList[1];
        } 
        else {
            a += e.target.classList[1];
            outputBox.textContent += e.target.classList[1];
        }
    }
    else if (e.type === "keydown" && e.key >= 0 && e.key <= 9) {
        if (operatorClicked) {
            b += e.key;
            outputBox.textContent += e.key;
        } 
        else {
            a += e.key;
            outputBox.textContent += e.key;
        }
    }
}

function decimal(e) {
    if (e.type === "click") {
        if (operatorClicked) {
            if (decimalActivated == false) {
                b += ".";
                outputBox.textContent += ".";
                decimalActivated = true;
            }
        } 
        else {
            if (decimalActivated == false) {
                a += ".";
                outputBox.textContent += ".";
                decimalActivated = true;
            }
        }
    }
    else if (e.type === "keydown" && e.key === ".") {
        if (operatorClicked) {
            if (decimalActivated == false) {
                b += ".";
                outputBox.textContent += ".";
                decimalActivated = true;
            }
        } 
        else {
            if (decimalActivated == false) {
                a += ".";
                outputBox.textContent += ".";
                decimalActivated = true;
            }
        }
    }
}

function activateDecimal() {
    decimalButton.addEventListener("click", decimal)
    window.addEventListener("keydown", decimal)
    decimalActivated = false;
}

activateDecimal();



operatorButton.forEach(button => {
    button.addEventListener("click", e => {
        if (b === "") {
            activateDecimal();


            middle = e.target.classList[1];
            //operators cannot be clicked more than once
            if (outputBox.textContent.charAt(outputBox.textContent.length - 1) === middle) {
                outputBox.textContent = outputBox.textContent.slice(0, -1) + middle;
            }
            else if (
                //operators cannot be clicked more than once but also cannot be bypassed by clicking different ones
                outputBox.textContent.charAt(outputBox.textContent.length - 1) == "+" ||
                outputBox.textContent.charAt(outputBox.textContent.length - 1) == "-" ||
                outputBox.textContent.charAt(outputBox.textContent.length - 1) == "x" ||
                outputBox.textContent.charAt(outputBox.textContent.length - 1) == "÷") {
                outputBox.textContent = outputBox.textContent.slice(0, -1) + middle;                    
            }
            else {
                outputBox.textContent += middle;
            }
        } 
        else {
            activateDecimal()
            runningTotal = operate(Number(a), middle, Number(b));
            outputBox.textContent = runningTotal;
            a = runningTotal;
            b = "";
            middle = e.target.classList[1];
            if (outputBox.textContent.charAt(outputBox.textContent.length - 1) === middle) {
                outputBox.textContent = outputBox.textContent.slice(0, -1) + middle;
            } 
            else {
                outputBox.textContent += middle;
            }
        }
        operatorClicked = true;
    });
});


  


clearButton.addEventListener("click", e => {
    a = "";
    middle = "";
    b = "";
    operatorClicked = false;
    decimalActivated = false;
    activateDecimal()
    outputBox.textContent = "";
})


function equals() {
    runningTotal =  operate(Number(a), middle, Number(b))
    if (middle == "÷" && b == 0) {
        alert("Excuse me you cannot divide by 0!")
    }

    outputBox.textContent = +parseFloat(runningTotal).toFixed(5)

    a = runningTotal;
    b = "";
}

equalsButton.addEventListener("click", () => {
    equals()
  });

// make the calculator look nice
// add backspace functionality
// add keyboard support
