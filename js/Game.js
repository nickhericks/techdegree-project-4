// Class called Game that manages logic of the game
// @param
class Game {
  constructor() {
		this.missed = 0;
		this.phrase = [
			'index zero',
			'index one',
			'index two',
			'index three',
			'index four'
		];
		this.activePhrase = null;
	}

		startGame() {
		// Hide start screen overlay

		// Set activePhrase property to a random phrase

		// Call the addPhraseToDisplay method on the active phrase

	}

	// Retrieve a random phrase from the phrase array
	getRandomPhrase() {


	}

	// 
	handleInteraction(letterElement) {
		console.log(letterElement);
		let letter = letterElement.textContent;

		// Disable selected letter's onscreen keyboard button
		

		// If phrase does NOT include guessed letter, the 'wrong' CSS class
		// is added to the selected letter's onscreen keyboard button
		// and removeLife() is called
		if(true) {
			letterElement.classList.add('wrong');
			this.removeLife();
		}


		// If phrase includes guessed letter, the 'chosen' CSS class
		// is added to the selected letter's onscreen keyboard button
		// and the showMatchedLetter() method is called on the phrase
		// and the checkForWin() method is called
				// If the player has won the game, the gameOver() method is called

	}

	// Check if all letters in the active phrase have been revealed
	checkForWin() {


	}

	// 
	removeLife() {
		// Remove life from scoreboard (change heart image shown)
		console.log(this.missed);
		let heart = document.getElementsByTagName('img')[this.missed];
		heart.setAttribute('src', 'images/lostHeart.png');
		// increment the 'missed' property
		this.missed++
		console.log(this.missed);
		
		// If the player has lost the game, call gameOver()
		if(this.missed === 5) {
			this.gameOver('lose');
		}
	}

	// 
	gameOver(outcome) {
		const overlay = document.querySelector('#overlay');
		const message = document.querySelector('#game-over-message');
		const button = document.querySelector('#btn__reset');
		console.log('Game Over');

		button.textContent = 'Play again';

		// Display win or loss message on overlay screen
		// with either the 'win' or 'lose' CSS class
		if(outcome === 'win') {
			message.textContent = 'You win!';
			overlay.classList.add('win');
		}
		else if (outcome === 'lose') {
			message.textContent = 'Sorry, try again next time!';
			overlay.classList.add('lose');
		}

		// Display the overlay element
		overlay.style.display = 'flex';
	}






}

