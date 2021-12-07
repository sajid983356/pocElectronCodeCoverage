const { ipcRenderer } = require('electron');

const greetButton = document.getElementById('greetButton');
const greetElement = document.getElementById('greet');

greetButton.addEventListener('click', () => {
	console.log("step 2")
	ipcRenderer.send('greet-me', 'Hello');
});

ipcRenderer.on('greeting', (event, args) => {
	console.log("step 3")
	greetElement.innerText = args;
});
