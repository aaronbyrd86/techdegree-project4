/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor()
    {
       this.missed = 0;
       this.phrases = this.createPhrases();
       this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases()
    {
        const phrases = [];

        phrases.push(new Phrase("hello world"));
        phrases.push(new Phrase("javascript"));
        phrases.push(new Phrase("for loop"));
        phrases.push(new Phrase("do while"));
        phrases.push(new Phrase("classes"));

        return phrases;
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame()
    {
        document.getElementById("overlay").style.display = "none";

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase()
    {
        let i = Math.floor(Math.random() * this.phrases.length);

        return this.phrases[i];
    }

    handleInteraction()
    {

    }

    removeLife()
    {

    }

    checkForWin()
    {

    }

    gameOver()
    {

    }
}