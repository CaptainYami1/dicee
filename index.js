function roll(){
    diceNum1 = document.querySelector(".img1");
    diceNum2 = document.querySelector(".img2");

    diceNum1.setAttribute("src", "images/diceroll.gif")
    diceNum2.setAttribute("src", "images/diceroll.gif")

    let result = document.querySelector("h1")

    setTimeout(() => {
  
    let RandomNumber1 = Math.floor(Math.random() *6) + 1;
    let RandomNumber2 = Math.floor(Math.random() *6) + 1;

    diceNum1.setAttribute("src", "images/dice" + RandomNumber1 +".png")
    diceNum2.setAttribute("src", "images/dice" + RandomNumber2 +".png")
    
    if (RandomNumber1 == RandomNumber2) {
        result.innerHTML = "Draw 🤪"
    } else if (RandomNumber1 > RandomNumber2) {
        result.innerHTML = "🏆 Player 1 Wins! 🏆"
    } else if (RandomNumber1 < RandomNumber2) {
        result.innerHTML = "🏆 Player 2 Wins! 🏆"
    }    
  },1500);
}