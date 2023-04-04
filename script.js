function operate(a, operator, b) {
    if (operator === "+") {
        return a + b
    }
    else if (operator === "-") {
        return a - b
    }
    else if (operator === "x") {
        return a * b
    }
    else if (operator === "÷") {
        return a / b
    }
}

let outputBox = document.getElementById("outputBox");
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const equalsButton = document.getElementById("equals")
const clearButton = document.getElementById("clear")

let a = "", middle = "", b = "", runningTotal = 0
let operatorClicked = false

numberButton.forEach(button => {
    button.addEventListener("click", e => {
        if (operatorClicked) {
          b += e.target.classList[1];
          outputBox.textContent += e.target.classList[1];
        } 
        else {
            a += e.target.classList[1]
            outputBox.textContent += e.target.classList[1];
        }
    });
});

operatorButton.forEach(button => {
    button.addEventListener("click", e => {
        if (b === "") {
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
    a = ""
    middle = ""
    b = ""
    operatorClicked = false
    outputBox.textContent = ""
})


function equals() {
    runningTotal =  operate(Number(a), middle, Number(b))
    outputBox.textContent = runningTotal
    a = runningTotal
    b = ""
}

equalsButton.addEventListener("click", () => {
    equals()
  });

// numbers needed to be rounded
// display a snarky error message when the user tries to divide by 0





// add functionality to the "other" class buttons
