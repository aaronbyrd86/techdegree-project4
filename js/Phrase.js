/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase)
    {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay()
    {
        const div = document.getElementById("phrase");
        const ul = div.querySelector("ul");

        for(let i = 0; i < this.phrase.length; i++)
        {
            const li = document.createElement("li");

            if(/\w/.test(this.phrase[i]))
            {
                li.className = `hide letter ${this.phrase[i]}`;
                li.textContent = `${this.phrase[i]}`;
            }
            else if(/\s/.test(this.phrase[i]))
            {
                li.className = "space";
                li.textContent = " ";
            }    

            ul.appendChild(li);
        }
        
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter)
    {
        if(this.phrase.search(letter) != -1)
            return true;

        return false;
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter)
    {
        const letters = document.getElementById("phrase").firstElementChild.getElementsByTagName("li");

        for(let i = 0; i < letters.length; i++)
        {
            if(letter == letters[i].textContent)
            {

            }
        }

        console.log(letters[0].textContent);
    }
}