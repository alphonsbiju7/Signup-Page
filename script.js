function clickSubmitButton(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const welcomeMessage = document.getElementById("welcome-message");

    welcomeMessage.textContent = "Welcome, " + username + "!";
    welcomeMessage.style.display = "block";
}

// Attach the event listener when the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", clickSubmitButton);
});