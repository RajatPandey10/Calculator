const input = document.getElementById("inputData");
const ans = document.getElementById("ans");
const buttons = document.querySelectorAll("button");

// Handle number & operator buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "=") {
            calculate();
        } 
        else if (value === "del") {
            deleteLast();
        } 
        else {
            input.value += value;
        }
    });
});

// Calculate result
function calculate() {
    try {
        ans.textContent = eval(input.value);
    } catch (error) {
        ans.textContent = "Invalid!";
    }
}

// Delete last character
function deleteLast() {
    input.value = input.value.slice(0, -1);
}
