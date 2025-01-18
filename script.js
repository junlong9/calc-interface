
const numbersContainer = document.querySelector(".numbers-container");

for (let i = 1; i < 10; i++) {
    let button = document.createElement("button");
    button.classList.add("number-buttons");
    button.textContent = i; 
    numbersContainer.appendChild(button);  
    button.addEventListener("click", input);  
}
let button = document.createElement("button");
    button.classList.add("number-buttons");
    button.textContent = 0; 
    numbersContainer.appendChild(button);
    button.addEventListener("click", input);  

const operationsContainer = document.querySelector(".operations-container");


function createOperationButton(text, eventHandler) {
    let button = document.createElement("button");
    button.classList.add("operations");
    button.textContent = text;
    operationsContainer.appendChild(button);
    button.addEventListener("click", eventHandler);
}

const operations = ["+", "-", "×", "÷", "DEL", "="];
operations.forEach(op => createOperationButton(op, input));


inputString = [" "];
let expression = [[]];
const screen = document.querySelector(".screen");

function input(event) {
    if (event.target.textContent != "DEL") {
        inputString.push(event.target.textContent);   
    }
    operate(event.target.textContent);
}   

function updateScreen() {
    screen.textContent = inputString.length > 0 ? inputString.join("") : "";
    
}

function operate(key) {
    
    if (key === "DEL") {
        inputString.pop();
    } else if (/\d/.test(key) || operations.includes(key)) {
        addToExpression(key);
        updateScreen();
    }
    if (key == "=") {
        const result = evaluateExpression(expression);
        inputString = [result.toString()]; 
        expression = [[]];
        updateScreen();
    }
    
}


function addToExpression(key) {
    if (/\d/.test(key)) {
        // if it is an integer, push the last sub-array
        expression[expression.length - 1].push(key);
    }
    else if (["+", "-", "×", "÷"].includes(key)) {
        // if it is an operation, push the key then push a new empty sub-array
        expression.push(key);
        expression.push([]);
    }
}

function evaluateExpression(expression) {
    const operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "×": (a, b) => a * b,
        "÷": (a, b) => a / b
    };

    const flatExpression = expression.map(item =>
        Array.isArray(item) ? Number(item.join("")) : item
    );
    nums = []
    ops = []
    for (let i = 0; i < expression.length; i++) {
        if (i % 2 == 0) {
            nums.push(Number(flatExpression[i]));
        } else {
            ops.push(flatExpression[i]);
        }
    }
    
    while (ops.length > 0) {
        const op = ops.shift();
        const a = nums.shift();
        const b = nums.shift();

        const result = operators[op](a, b);
        nums.unshift(result); 
    }
    return nums[0];
}



