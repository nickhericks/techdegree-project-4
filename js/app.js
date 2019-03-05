
const button = document.querySelector('#btn__reset');
const overlay = document.querySelector('#overlay');

let game;


button.addEventListener('click', function(event) {
		// Hide the overlay element
	overlay.style.display = 'none';

	// Initiate a new game object
	game = new Game();
});

