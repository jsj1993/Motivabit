fetch('dialogues.json')
    .then(response => response.json())
    .then(data => {
        const dialogueContainer = document.getElementById('dialogue-container');
        data.dialogues.forEach(dialogue => {
            const dialogueElement = document.createElement('p');
            dialogueElement.innerHTML = `<strong>${dialogue.character}:</strong> ${dialogue.text}`;
            dialogueContainer.appendChild(dialogueElement);
        });
    })
    .catch(error => console.error('Error fetching dialogues:', error));