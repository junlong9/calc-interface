const container = document.querySelector(".container");

for (i = 0; i < 3; i++) {
    let button = document.createElement("button");
    button.classList.add("number_buttons");
    button.textContent = i;
    container.appendChild(button);
    for (i = 0; i < 3; i++) {
        let button = document.createElement("button");
        button.classList.add("number_buttons");
        button.textContent = i;
        container.appendChild(button);
    }
}