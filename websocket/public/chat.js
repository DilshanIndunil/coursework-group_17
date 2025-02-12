const socket = io();

const form = document.getElementById('chat-form');
const input = document.getElementById('message-input');
const messages = document.getElementById('messages');

// Function to generate random user colors
function getRandomColor() {
    const colors = ['bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-purple-200', 'bg-pink-200', 'bg-red-200'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Handle form submission (sending messages)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim()) {
        const timestamp = new Date().toLocaleTimeString();
        const userColor = getRandomColor();
        socket.emit('chat message', { text: input.value, time: timestamp, userColor });
        input.value = '';
    }
});

// Listen for incoming messages
socket.on('chat message', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.className = `message p-4 rounded-lg shadow-sm ${msg.userColor} max-w-lg mx-auto`;

    const timeElement = document.createElement('span');
    timeElement.className = 'text-xs text-gray-500 block';
    timeElement.textContent = msg.time;

    const textElement = document.createElement('p');
    textElement.className = 'text-lg font-semibold text-gray-800';
    textElement.textContent = msg.text;

    messageElement.appendChild(timeElement);
    messageElement.appendChild(textElement);
    messages.appendChild(messageElement);
    
    // Scroll to the bottom when a new message is added
    messages.scrollTop = messages.scrollHeight;
});
