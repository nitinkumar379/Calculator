const display = document.getElementById('display');

function appendCharacter(char) {
    if (display.innerText === "0") {
        display.innerText = char;
    } else {
        display.innerText += char;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    if (display.innerText.length === 1) {
        display.innerText = "0";
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}
