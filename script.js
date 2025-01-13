
const numbersContainer = document.querySelector(".numbers-container");

for (let i = 1; i < 10; i++) {
    let button = document.createElement("button");
    button.classList.add("number-buttons");
    button.textContent = i; 
    numbersContainer.appendChild(button);    
}
let button = document.createElement("button");
    button.classList.add("number-buttons");
    button.textContent = 0; 
    numbersContainer.appendChild(button);

const operationsContainer = document.querySelector(".operations-container");

let plus = document.createElement("button");
    plus.classList.add("operations");
    plus.textContent = "+"; 
    operationsContainer.appendChild(plus);  

let minus = document.createElement("button");
minus.classList.add("operations");
minus.textContent = "-"; 
operationsContainer.appendChild(minus);

let multiply = document.createElement("button");
multiply.classList.add("operations");
multiply.textContent = "x"; 
operationsContainer.appendChild(multiply);

let divide = document.createElement("button");
divide.classList.add("operations");
divide.textContent = "÷"; 
operationsContainer.appendChild(divide);
    
    

