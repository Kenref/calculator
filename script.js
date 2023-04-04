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
        } else {
            a += e.target.classList[1]
            outputBox.textContent += e.target.classList[1];
        }
    });
});

operatorButton.forEach(button => {
    button.addEventListener("click", e => {
        if (b === "") {
            middle = e.target.classList[1];
            outputBox.textContent += middle;
        } else {
            runningTotal = operate(Number(a), middle, Number(b));
            outputBox.textContent = runningTotal;
            a = runningTotal;
            b = "";
            middle = e.target.classList[1];
            outputBox.textContent += middle;
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

// find a way to append first into the runningTotal when middle is activated
// need to add another e listenrs
// need to bake conditionals into getnumber





// add functionality to the "other" class buttons
