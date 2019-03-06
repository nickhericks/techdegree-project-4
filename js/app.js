
const button = document.querySelector('#btn__reset');
const overlay = document.querySelector('#overlay');
const keyboard = document.querySelector('#qwerty');
const keys = document.querySelectorAll('.key');
let game;

// When user clicks start/reset button
button.addEventListener('click', function(event) {
	// Initiate a new game object
	game = new Game();
	game.startGame();
});


// Event listener for onscreen keyboard
keyboard.addEventListener('click', function(event) {
	// Ensure event target clicked has a class of 'key'
	if(event.target.classList.contains('key')) {
		// Call handleInteraction() method on the clicked keyboard button
		game.handleInteraction(event.target);
	}
});

// Event listener for physical keyboard
window.addEventListener('keyup', function(event) {
	// If key pressed is a-z
	if( event.keyCode >= 65 && event.keyCode <= 90 ) {
		// Find button element in the DOM that matches the key pressed
		let keyElement = Array.from(keys).filter(key => key.textContent === event.key);

		// Call handleInteraction() method on the letter key pressed
		game.handleInteraction(keyElement[0]);
	}
});