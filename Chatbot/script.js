const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(message, className) {
    const div = document.createElement("div");
    div.classList.add(className);
    div.textContent = message;

    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(message) {
    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
        return "Hello! How can I help you?";
    }

    if (message.includes("name")) {
        return "I am a simple JavaScript chatbot.";
    }

    if (message.includes("how are you")) {
        return "I'm doing great!";
    }

    return "Sorry, I don't understand that.";
}

function sendMessage() {
    const message = userInput.value.trim();

    if (!message) return;

    addMessage(message, "user-message");

    const reply = getBotReply(message);

    setTimeout(() => {
        addMessage(reply, "bot-message");
    }, 500);

    userInput.value = "";
}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});