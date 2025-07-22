const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const resultElement = document.getElementById('result')

const submit = document.getElementById('submit')

const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiBtn = document.getElementById('multiplication')
const divisionBtn = document.getElementById('division')

//My Flag-Method

let action = ' '

plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}
multiBtn.onclick = function () {
    action = '*'
}
divisionBtn.onclick = function () {
    action = '/'
}

function printResult(number) {
    if (number < 0){
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {

    const val1 = Number(inp1.value)
    const val2 = Number(inp2.value)

    if (actionSymbol == '+') {
        return val1 + val2
    } else if(actionSymbol == '-') {    
        return val1 - val2
    } else if(actionSymbol == '*') {
        return val1 * val2
    } else if(actionSymbol == '/') {
        return val1 / val2
    }
}

submit.onclick = function () {
    const result = computeNumbersWithAction(num1, num2, action)
    printResult(result)
    resultElement.textContent = result
}