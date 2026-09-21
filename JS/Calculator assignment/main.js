let display = document.querySelector("#display")

function press(name) {
    display.textContent += name
}

function setOP(op) {
    display.textContent += op;
}

function calculate() {
    let monsters = display.textContent;

    if (monsters.includes("+")) {
        let numbers = monsters.split("+");
        display.textContent = Number(numbers[0]) + Number (numbers[1]);

    } else if (monsters.includes("-")) {
        let numbers = monsters.split("-");
        display.textContent = Number(numbers[0]) - Number (numbers[1]);

    } else if (monsters.includes("*")) {
        let numbers = monsters.split("*");
        display.textContent = Number(numbers[0]) * Number (numbers[1]);

    } else if (monsters.includes("/")) {
        let numbers = monsters.split("/");
        display.textContent = Number(numbers[0]) / Number (numbers[1]);
    }
}

function clr() {
    display.textContent = "";
}