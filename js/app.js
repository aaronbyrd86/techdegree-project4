/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });


document.getElementById("btn__reset").addEventListener("click", event => {
  if(!document.getElementById("overlay").classList.contains("start"))
    game.reset()    

  game = new Game(); 
  game.startGame();
})

document.querySelector("#qwerty").addEventListener("click", event => {
  if(event.target.className == "key")
    game.handleInteraction(event.target);
})

document.addEventListener("keydown", event => {
  console.log(/^[a-z]{1}$/.test(event.key))
  if(/^[a-z]{1}$/.test(event.key)) 
  {
    let button;
    const letters = document.getElementById("qwerty").querySelectorAll("button");
    
    for(let i = 0; i < letters.length; i++)
    {
      if(letters[i].textContent == event.key)
        button = letters[i];
    }
    
    if(!button.disabled)
      game.handleInteraction(button);
  }
      
})