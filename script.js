function sendMessage() {
    var userInput = document.getElementById("user-input").value;

    if (userInput.trim() === "") {
        return;
    }

    // Mostrar el mensaje del usuario en el chat
    var userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerHTML = "<p>" + userInput + "</p>";
    document.getElementById("chatbox").appendChild(userMessage);

    // Limpiar el campo de entrada
    document.getElementById("user-input").value = "";

    // Respuesta del bot
    setTimeout(function() {
        var botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.innerHTML = "<p>" + generateBotResponse(userInput) + "</p>";
        document.getElementById("chatbox").appendChild(botMessage);
        document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
    }, 500);
}

function generateBotResponse(input) {
    // Respuestas predefinidas simples basadas en palabras clave
    input = input.toLowerCase();
    if (input.includes("hola")) {
        return "¡Hola! ¿Cómo estás?";
    } else if (input.includes("cómo estás")) {
        return "Estoy aquí para ayudarte. ¿En qué puedo asistirte?";
    } else if (input.includes("adiós")) {
        return "¡Adiós! Que tengas un buen día.";
    } else {
        return "No entiendo tu mensaje, pero estoy aquí para ayudarte.";
    }
}
