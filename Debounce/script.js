// Stefan Sommarsjö
// https://github.com/sestsom/Web

let debounceTimeout;

function debounceFunction(func, delay) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(func, delay);
}

function buttonClicked() {
    document.getElementById("status").textContent = "Function Executed!";
    // Reset after 2 seconds
    setTimeout(() => {
        document.getElementById("status").textContent = "Ready...";
    }, 2000);
}

document.getElementById("actionButton").addEventListener("click", () => {
    debounceFunction(buttonClicked, 1000); // Milliseconds debounce time
});
