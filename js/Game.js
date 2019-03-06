// Class called Game that manages logic of the game
class Game {
  constructor() {
		this.missed = 0;
		this.phrases = [
			'hypertext markup language',
			'cascading style sheets',
			'javascript',
			'react',
			'python'
		];
		this.activePhrase = null;
		this.selectedLetters = [];
	}

	/**
	* Begins game by resetting the game and selecting a phrase
	*/
	startGame() {
		const overlay = document.querySelector('#overlay');

		// Remove 'wrong' and 'chosen' class from all keys
		const allKeys = document.querySelectorAll('.key');
		allKeys.forEach(key => key.classList.remove('wrong', 'chosen'));

		// Reset hearts images
		const hearts = document.querySelectorAll('img');
		hearts.forEach(heart => heart.setAttribute('src', 'images/liveHeart.png'));

		// Hide start screen overlay
		overlay.style.display = 'none';

		// Set activePhrase property to a new random phrase
		this.activePhrase = new Phrase(this.getRandomPhrase());
		
		//Call the addPhraseToDisplay method on the active phrase
		this.activePhrase.addPhraseToDisplay();
	}


	/**
	* Selects random phrase from 'this.phrases' array
	* @return {string} Phrase string chosen to be used
	*/
	getRandomPhrase() {
		let randomIndex = Math.floor(Math.random() * 5);
		return this.phrases[randomIndex];
	}


	/**
	* Handles onscreen keyboard button clicks
	* @param (HTMLButtonElement) button - The clicked button element
	*/
	handleInteraction(keyElement) {
		let letter = keyElement.textContent;
		let isMatch = this.activePhrase.checkLetter(letter);

		// If letter clicked has not already been selected
		if( (this.selectedLetters.includes(letter)) !== true ) {

			// If phrase does NOT include guessed letter
			if(isMatch === false) {
				// The 'wrong' class is added to the key button element
				keyElement.classList.add('wrong');
				
				this.removeLife();
			}

			// If the phrase DOES include the guessed letter
			if (isMatch === true) {
				// The 'chosen' class is added to the key button element
				keyElement.classList.add('chosen');
				
				// The showMatchedLetter() method is called on the phrase
				this.activePhrase.showMatchedLetter(letter);

				// If the checkForWin() method returns true
				if(this.checkForWin()) {
					this.gameOver();
				}
			}
			// Disable selected letter's onscreen keyboard button
			this.selectedLetters.push(letter);			
		}
	}


	/**
	* Check if all letters in the active phrase have been revealed
	* @return {boolean} True if game has been won, false if game wasn't won
	*/
	checkForWin() {
		const allLetters = document.querySelectorAll('.letter');
		const shownLetters = document.querySelectorAll('.show');

		// If all letters have been displayed
		if(allLetters.length === shownLetters.length) {
			return true;
		}
		else {
			return false;
		}
	}


	/**
	* Removes a life from the scoreboard
	* Increases the value of the missed property
	* Checks if player has remaining lives and ends game if player is out
	*/
	removeLife() {
		// Get heart element based on number of missed letters selected
		let heart = document.getElementsByTagName('img')[this.missed];

		// Update heart element image
		heart.setAttribute('src', 'images/lostHeart.png');

		// increment the 'missed' property
		this.missed++
		
		// If the player has lost the game, call gameOver()
		if(this.missed === 5) {
			this.gameOver();
		}
	}

	/**
	* Displays game over message
	*/
	updateOverlay(newMessage, newClass) {
		const overlay = document.querySelector('#overlay');
		const message = document.querySelector('#game-over-message');
		const button = document.querySelector('#btn__reset');

		overlay.classList.remove('win', 'lose');

		message.textContent = newMessage;
		overlay.classList.add(newClass);

		button.textContent = 'Play again';
		overlay.style.display = 'flex';
	}

	/**
	* Displays custom overlay depending on win or lose
	*/
	gameOver() {
		if(this.missed < 5) {
			this.updateOverlay('You win!', 'win');
		}
		else {
			this.updateOverlay('Sorry, try again next time!', 'lose');
		}
	}
}

