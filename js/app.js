/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();;

game.phrases.forEach((phrase, index) => {
console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});

// let phrase = game.getRandomPhrase().phrase;

// game.getRandomPhrase().addPhraseToDisplay();

 console.log(game.activePhrase)

 document.getElementById("btn__reset").addEventListener("click", event => {
    game.startGame();
 })