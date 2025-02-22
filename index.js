// Motivational Quotes
const quotes = [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The best way to predict the future is to create it. - Peter Drucker"
];

// Motivabot Responses
const botResponses = [
    "You're doing great! Keep pushing forward!",
    "Every small step counts. Keep going!",
    "Remember why you started. You've got this!",
    "Take a deep breath and focus. You're capable of amazing things!",
    "Progress is progress, no matter how small. Keep it up!"
];

// Goal List
const goalList = document.getElementById('goal-list');
const goalForm = document.getElementById('goal-form');

// Add Goal
goalForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const goalInput = document.getElementById('goal');
    if (goalInput.value.trim()) {
        const newGoal = document.createElement('li');
        newGoal.textContent = goalInput.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            goalList.removeChild(newGoal);
        });
        newGoal.appendChild(deleteButton);
        goalList.appendChild(newGoal);
        goalInput.value = '';
    }
});

// New Quote Generator
const quoteElement = document.getElementById('quote');
document.getElementById('new-quote').addEventListener('click', function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
});

// Chat Interaction
const chatLog = document.getElementById('chat-log');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', function() {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        // Add user message to chat log
        const userMessageElement = document.createElement('div');
        userMessageElement.textContent = `You: ${userMessage}`;
        chatLog.appendChild(userMessageElement);

        // Add Motivabot response
        const botResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        const botMessageElement = document.createElement('div');
        botMessageElement.textContent = `Motivabot: ${botResponse}`;
        botMessageElement.classList.add('bot');
        chatLog.appendChild(botMessageElement);

        // Clear input
        chatInput.value = '';
        chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to bottom
    }
});