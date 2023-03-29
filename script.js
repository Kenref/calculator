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

let a = 0, middle = "", b = 0, runningTotal = 0

function getNumber(num) {
    for (let i = 0; i < number.length; i++) {
        number[i].addEventListener("click", (e) => {
            if (outputBox.textContent == 0) {
                outputBox.textContent = e.srcElement.innerText
                numbers = e.srcElement.innerText
            }else {
                outputBox.textContent += e.srcElement.innerText
                numbers += e.srcElement.innerText
            }
            console.log(numbers)
            return num
        })
    }
}

function getOperator() {
    for (let i = 0; i < operator.length; i++) {
        operator[i].addEventListener("click", (e) => {
            if (outputBox.textContent == 0) {
                outputBox.textContent = e.srcElement.innerText
            }else {
                outputBox.textContent += e.srcElement.innerText
            }

        })
    }
}

// find a way to append first into the runningTotal when middle is activated
// need to add another event listenrs
// need to bake conditionals into getnumber

if (a == 0 && middle == "") {
    a = getNumber(a)
    console.log("hi")
}
if (middle == "") {
    middle = getOperator()
    console.log("yes")
}
if (middle != "" || a != 0) {
    b = getNumber(b)
}


// let first = getNumber(a)
// console.log(first)

// let middle = getOperator()


// let second = getNumber(b)


// console.log(first, second)



// add functionality to the "other" class buttons


// number.addEventListener("click", (e) => {
//     outputBox.textContent += e.explicitOriginalTarget.innerText
//     console.log(e)
//     console.log(e.explicitOriginalTarget.innerText)

// })