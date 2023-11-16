document.addEventListener('DOMContentLoaded', function () {
    // Get the receiver ID (you might get this dynamically based on your system)
    var receiverId = prompt('Enter the receiver ID:');

    // Initialize the chat with the receiver ID
    getMessages(receiverId);

    // Set the receiver ID for sending messages
    window.receiverId = receiverId;
});

function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value;

    if (message.trim() !== '') {
        sendToServer(message);
        messageInput.value = '';
    }
}

function sendToServer(message) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'chat_server.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            getMessages(window.receiverId);
        }
    };
    xhr.send('message=' + encodeURIComponent(message) + '&receiver=' + window.receiverId);
}

function getMessages(receiverId) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'chat_server.php?receiver=' + receiverId, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var messages = JSON.parse(xhr.responseText);
            displayMessages(messages);
        }
    };
    xhr.send();
}

function displayMessages(messages) {
    var messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML = '';

    messages.forEach(function (message) {
        var messageElement = document.createElement('div');
        messageElement.innerHTML = `<strong>${message.sender}:</strong> ${message.message}`;
        messagesContainer.appendChild(messageElement);
    });

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

setInterval(function() {
    getMessages(window.receiverId);
}, 3000); // Poll every 3 seconds (adjust as needed)
