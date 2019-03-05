
const button = document.querySelector('#btn__reset');
const overlay = document.querySelector('#overlay');
const keyboard = document.querySelector('#qwerty');

let game;

// When user clicks start/reset button
button.addEventListener('click', function(event) {
		// Hide the overlay element
	overlay.style.display = 'none';

	// Initiate a new game object
	game = new Game();
});


// Event listener for onscreen keyboard
keyboard.addEventListener('click', function(event) {
	// Ensure event target clicked is a key
	if(event.target.classList.contains('key')) {
		// Call handleInteraction() method on the clicked keyboard button
		game.handleInteraction(event.target);
	}
});