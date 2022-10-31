let num1 = Math.ceil(Math.random() * 10)
let num2 = Math.ceil(Math.random() * 10)

let questionel = document.getElementById("question");
let formel = document.getElementById("form");
let inputel = document.getElementById("input");
let scoreel = document.getElementById("score");
let resetel = document.getElementById("reset");



let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
     score = 0;
}
scoreel.innerText = `score = ${score}`
questionel.innerText = `what is ${num1} multiply by ${num2} ?`




let correctAns = num1 * num2;

formel.addEventListener("submit", () => {
     let userAnswer = +inputel.value
     if (userAnswer == correctAns) {
          score++;
          updateLocalStorage()
     } else {
          score--
          updateLocalStorage()
     }
})

function updateLocalStorage() {
     localStorage.setItem("score", JSON.stringify(score))
}
function localStorageClear() {
     localStorage.clear()
     location.reload();


}