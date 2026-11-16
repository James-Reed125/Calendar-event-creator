const eventText = document.getElementById("event-text");
const extractButton = document.getElementById("extract-button");
const message = document.getElementById("message");

extractButton.addEventListener("click", () => {
    const text = eventText.value.trim();

    if (text === "") {
        message.textContent = "Paste an event description first.";
    } else {
        message.textContent = "You entered: " + text;
    }
});