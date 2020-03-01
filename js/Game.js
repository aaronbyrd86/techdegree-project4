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
        document.getElementById("overlay").style.visibility = "hidden";

        if(this.activePhrase != null)
            this.reset();

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * resets the game so the user can play again
    */
   reset()
   {
        const ul = document.getElementById("phrase").querySelector("ul");
        const buttons = document.getElementById("qwerty").querySelectorAll("button");
        const hearts = document.getElementById("scoreboard").firstElementChild.getElementsByTagName("li");
        const overlay = document.getElementById("overlay");

        while (ul.hasChildNodes()) {  
            ul.removeChild(ul.firstChild);
        }
        
        for(let i = 0; i < buttons.length; i++)
        {
            buttons[i].disabled = false;
            buttons[i].classList.remove("chosen");
            buttons[i].classList.remove("wrong");
        }

        for(let i = 0; i < hearts.length; i++)
        {
            hearts[i].firstElementChild.src = "images/liveHeart.png";
        }
        this.missed = 0;

        if(overlay.className == "win")
            overlay.classList.replace("win", "start");
        else    
            overlay.classList.replace("lose", "start");
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

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button)
    {
        const guessedLetter = button.textContent;
        
        button.disabled = true;

        if(!this.activePhrase.checkLetter(guessedLetter))
        {
            button.classList.add("wrong");
            this.removeLife();
        }
        else
        {
            button.classList.add("chosen");
            this.activePhrase.showMatchedLetter(guessedLetter);

            if(this.checkForWin())
                this.gameOver(true);
        }
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife()
    {
        const hearts = document.getElementById("scoreboard").firstElementChild.getElementsByTagName("li");
        
        this.missed++;
        
        if(this.missed === 5)
            this.gameOver(false);

        hearts[this.missed - 1].firstElementChild.src = "images/lostHeart.png";    
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin()
    {
        const letters = document.getElementById("phrase").firstElementChild.getElementsByTagName("li");

        for(let i = 0; i < letters.length; i++)
        {
            if(letters[i].classList.contains("hide"))
                return false;
        }

        return true;
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon)
    {
        const overlay = document.getElementById("overlay");

        overlay.style.visibility = "visible";

        if(gameWon)
        {
            overlay.querySelector("h1").innerHTML = `A glorius victory<br>May Wepwawet guard you and your family`;
            overlay.classList.replace("start", "win");
        }
        else
        {
            overlay.querySelector("h1").textContent = "You brought shame upon your house :(";
            overlay.classList.replace("start", "lose");
        }
    }
}