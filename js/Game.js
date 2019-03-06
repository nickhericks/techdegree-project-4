// Class called Game that manages logic of the game
class Game {
  constructor() {
		this.missed = 0;
		this.phrases = [
			'index zero',
			'index one',
			'index two',
			'index three',
			'index four'
		];
		this.activePhrase = null;
		this.selectedLetters = [];
	}

	/**
	* Begins game by resetting the game and selecting a phrase
	*/
	startGame() {
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
		console.log(keyElement);
		let letter = keyElement.textContent;
		let isMatch = this.activePhrase.checkLetter(letter);

		// If letter clicked has not already been selected
		if( (this.selectedLetters.includes(letter)) !== true ) {

			// If phrase does NOT include guessed letter, the 'wrong' CSS class
			// is added to the selected letter's onscreen keyboard button
			// and removeLife() is called
			console.log(this.activePhrase.checkLetter(letter));
			if(isMatch === false) {
				keyElement.classList.add('wrong');
				this.removeLife();
			}


			// If phrase includes guessed letter, the 'chosen' CSS class
			// is added to the selected letter's onscreen keyboard button
			if (isMatch === true) {
				keyElement.classList.add('chosen');
				
				// The showMatchedLetter() method is called on the phrase
				this.activePhrase.showMatchedLetter(letter);
				// The checkForWin() method is called
				// If the player has won the game, the gameOver() method is called
				if(this.checkForWin()) {
					this.gameOver(true);
				}
			}
			// Disable selected letter's onscreen keyboard button
			this.selectedLetters.push(letter);
			console.log(`selectedLetters array: [${this.selectedLetters}]`);
			
		}
	}


	/**
	* Check if all letters in the active phrase have been revealed
	* @return {boolean} True if game has been won, false if game wasn't won
	*/
	checkForWin() {
		const allLetters = document.querySelectorAll('.letter');
		const shownLetters = document.querySelectorAll('.show');
		console.log(`allLetters: ${allLetters.length}`);
		console.log(`shownLetters: ${shownLetters.length}`);
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
		// Remove life from scoreboard (change heart image shown)
		console.log(this.missed);
		let heart = document.getElementsByTagName('img')[this.missed];
		heart.setAttribute('src', 'images/lostHeart.png');
		// increment the 'missed' property
		this.missed++
		console.log(`this.missed = ${this.missed}`);
		
		// If the player has lost the game, call gameOver()
		if(this.missed === 5) {
			this.gameOver(false);
		}
	}


	/**
	* Displays game over message
	* @param {boolean} gameWon - Whether or not the user won the game
	*/
	gameOver(gameWon) {
		const overlay = document.querySelector('#overlay');
		const message = document.querySelector('#game-over-message');
		const button = document.querySelector('#btn__reset');

		if(gameWon) {
			message.textContent = 'You win!';
			overlay.classList.add('win');
		}
		else {
			message.textContent = 'Sorry, try again next time!';
			overlay.classList.add('lose');
		}
		
		button.textContent = 'Play again';
		overlay.style.display = 'flex';
	}






}

