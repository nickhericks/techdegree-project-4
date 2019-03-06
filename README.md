# Project 4 - Full Stack JavaScript Techdegree

### OOP Game Show App

This project uses Object-Oriented JavaScript to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

---

<!-- <img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1550234182/portfolio/interactive-form-1.png" width="400px"><img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1550218646/portfolio/screenshot-padding-github.png" width="50px">
<img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1550234182/portfolio/interactive-form-2.png" width="400px"> -->

## View project

:mag: Live version available at [nickhericks.github.io/techdegree-project-4/](https://nickhericks.github.io/techdegree-project-4/)

## Project objective

To complete this project I created two JavaScript classes with specific properties and methods. A Game class for managing the game, and a Phrase class to help with creating an array of Phrase objects. The code chooses a random phrase, splits the phrase into letters, and puts those letters onto the gameboard. Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase.

If the letter is in the phrase, the gameboard displays the chosen letters on the screen. The player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears. The player can guess a letter only once. After they’ve guessed a letter, the program disables that letter.

## Techniques and concepts

<!-- - jQuery - For document traversal/manipulation, event handling and animation
- Regular Expressions - For form validation
- Progressive Enhancement - JavaScript added without making the page dependent upon JavaScript. -->

- Object-Oriented Programming
- JavaScript classes
- Array iteration using .forEach(), .map(), .filter(), and .reduce()

## Additional features

In addition to completing the basic requirements for this techdegree project, I also added additional features including:

- [x] Added functionality allowing players to use physical keyboard (instead of just the on-screen keyboard)
- [x] Personalized CSS styling (colors, fonts, etc.)

## Code example

<!-- An example of one of the JavaScript functions in this project:
1. The validEmail function  uses a regular expression to test the value of the email field and assigns the result to an emailIsValid variable
2. A switch statement is then used to determine if an error message is shown or hidden.
3. The emailIsValid variable is then returned and later used along with other form field validation functions to determine if the user can submit the form.

```javascript
// Check email value, show appropriate errors and return true if no errors
const validEmail = function() {
  const emailIsValid = /^[^@]+@[^@]+\.[a-z]+$/i.test($($email).val());
  // If name is valid, hide errors, else show errors
  emailIsValid ? (removeError($($email), $emailError)) : (showError($($email), $emailError));
  // Return true if valid
  return emailIsValid;
}
``` -->

## Acknowledgements

This project was built as part of the [Full Stack JavaScript Techdegree](https://join.teamtreehouse.com/techdegree/) offered by [Treehouse](https://teamtreehouse.com) :raised_hands:
