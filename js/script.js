// seleziono gli input e output
const outputTimer = document.getElementById("countdown");
const AnswerForm = document.getElementById("answers-form");
const numbersList = document.getElementById("numbers-list");
const messaggio = document.getElementById("message");


// Timer e apparizione del Form
let seconds = 5;
outputTimer.innerText = seconds--;

const intervalId = setInterval( function () {
    if (seconds === 0) {
        outputTimer.innerText = "Inizia!";
        clearInterval(intervalId);

        numbersList.innerHTML = "";
        AnswerForm.classList.remove("d-none");

    } else {
        outputTimer.innerText = seconds--;
    }
}, 1000);

// Generatore di numeri casuali da 1 a 50
const randomNumbers = [];

for (let i = 0; i < 5; i++) {
  const n = Math.floor(Math.random() * 50) + 1;
  randomNumbers.push(n);
}


randomNumbers.forEach(num => {
  const li = document.createElement("li");
  li.textContent = num;
  numbersList.appendChild(li);
});

// Messaggio per la soluzione del gioco