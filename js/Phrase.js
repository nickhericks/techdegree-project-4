// Class called Phrase that creates an array of Phrase objects
class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }


  // Adds the phrase to the gameboard
  addPhraseToDisplay() {
		const ul = document.querySelector('#phrase').firstElementChild;
		console.log(ul);
		
		console.log(this.phrase);
		// Create array from each character in the phrase
		const characters = this.phrase.split('');
		console.log(characters);
		
		// Loop through phrase array
		characters.forEach(character => {
			let element = document.createElement('li');
			
			if(character === ' ') {
				element.classList.add('space');
			}
			else {
				element.classList.add('hide', 'letter', character);
				element.textContent = character;
			}
			ul.appendChild(element);
			
			
			
			console.log(element);
		});
	}


  // Checks if a letter is in the phrase
  checkLetter() {




	}

  // Reveals the letter(s) on the board that matches the player's selection
  showMatchedLetter() {



	}
}
