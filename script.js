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
const number = document.getElementsByClassName("number");
const operator = document.getElementsByClassName("operator");
const equalsButton = document.getElementById("equals")


let a = { value: "" }, middle = { value: ""}, b = { value: ""}, runningTotal = 0

function getNumber(num) {
    for (let i = 0; i < number.length; i++) {
        number[i].addEventListener("click", (e) => {
            outputBox.textContent += e.target.classList[1]
            num.value += e.target.classList[1]
            // console.log(num.value)
        })
    }
    return num
}




a = getNumber(a)

function equals(abc) {
    equalsButton.addEventListener("click", () => {
        console.log(abc.value)
    })
}
equals(a)



// find a way to append first into the runningTotal when middle is activated
// need to add another event listenrs
// need to bake conditionals into getnumber





// add functionality to the "other" class buttons
