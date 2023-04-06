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

        
function addOperator(e) {
    if (e.type === "click") {
        if (b === "") {
            activateDecimal();
            middle = e.target.classList[1];
            if (outputBox.textContent.charAt(outputBox.textContent.length - 1) === middle) {
                outputBox.textContent = outputBox.textContent.slice(0, -1) + middle;
            }
            else if (
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
    }

    else if (e.type === "keydown" && (e.key === "+" || e.key === "-" || e.key === "x" || e.key === "/" || e.key === "*")){
        if (b === "") {
            activateDecimal();
            if (e.key == "/") {
                middle = "÷"
            }
            else if (e.key == "x" || e.key == "*") {
                middle = "x"
            }
            else {
                middle = e.key;
            }
            if (outputBox.textContent.charAt(outputBox.textContent.length - 1) === middle) {
                outputBox.textContent = outputBox.textContent.slice(0, -1) + middle;
            }
            else if (
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
            if (e.key == "/") {
                middle = "÷"
            }
            else if (e.key == "x" || e.key == "*") {
                middle = "x"
            }
            else {
                middle = e.key;
            }
            if (outputBox.textContent.charAt(outputBox.textContent.length - 1) === middle) {
                outputBox.textContent = outputBox.textContent.slice(0, -1) + middle;
            } 
            else {
                outputBox.textContent += middle;
            }
        }
        operatorClicked = true;
    }
}

  

function clear(e) {
    if (e.type === "click" || (e.key === "Backspace" && e.type === "keydown")) {
        a = "";
        middle = "";
        b = "";
        operatorClicked = false;
        decimalActivated = false;
        activateDecimal()
        outputBox.textContent = "";
    }
}

function activateClear() {
    clearButton.addEventListener("click", clear)
    window.addEventListener("keydown", clear)
}













function equals(e) {
    if (e.type === "click" || (e.key === "=" && e.type === "keydown") || (e.key === "Enter" && e.type === "keydown")) {   
        runningTotal =  operate(Number(a), middle, Number(b))
        if (middle == "÷" && b == 0) {
            alert("Excuse me you cannot divide by 0!")
        }
        outputBox.textContent = +parseFloat(runningTotal).toFixed(5)
        a = runningTotal;
        b = "";
    }
}

function activateEquals() {
    equalsButton.addEventListener("click,", equals)
    window.addEventListener("keydown", equals)
}









numberButton.forEach(number => {
    number.addEventListener("click", addNumber)
    window.addEventListener("keydown", addNumber)
})

operatorButton.forEach(button => {
    button.addEventListener("click", addOperator)
    window.addEventListener("keydown", addOperator)
})

activateDecimal()
activateEquals()
activateClear()


// make the calculator look nice



// function activateDecimal() {
//     decimalButton.addEventListener("click", decimal)
//     window.addEventListener("keydown", decimal)
//     decimalActivated = false;
// }

// activateDecimal();

