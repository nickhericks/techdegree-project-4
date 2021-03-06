// Class called Phrase that creates an array of Phrase objects
class Phrase {
  constructor(phrase) {
		this.phrase = phrase;
  }


  // Adds letter placeholders for the phrase to the gameboard
  addPhraseToDisplay() {
		const ul = document.querySelector('#phrase').firstElementChild;

		// Reset phrase spaces
		ul.innerHTML = "";

		// Create array from each character in the phrase
		const characters = this.phrase.split('');
		
		// Loop through phrase array
		characters.forEach(character => {
			let element = document.createElement('li');
			
			if(character === ' ') {
				element.classList.add('space');
			}
			else {
				element.classList.add('letter', character);
				element.textContent = character;
			}
			ul.appendChild(element);			
		});
	}


	/**
	* Check if passed letter is in phrase
	* @param (string) letter - Letter to check
	* @return (boolean) Return true if letter exists in phrase array
	*/
  checkLetter(letter) {
		return this.phrase.includes(letter);
	}


	/**
	* Reveals the letter(s) on the board that matches the player's selection
	* @param (string) letter - Letter to display
	*/
  showMatchedLetter(letter) {
		// Find all elements with class of letter
		let matchedLetters = document.querySelectorAll('.' + letter);

		// Add class of 'show' to those elements
		matchedLetters.forEach( match => match.classList.add('show') );
	}
}
