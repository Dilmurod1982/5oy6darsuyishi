const numberEl = document.getElementById("g-number");
const inputEl = document.getElementById("input-number");
const checkEl = document.getElementById("check");
const messageEl = document.getElementById("message");
const attempsEL = document.getElementById("attemps");
const recordEl = document.getElementById("record");
const againEl = document.getElementById("again");
let divchaEl = document.getElementById("divcha");

let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
let attemps = 0;
let totalAttemps = 20;
let oyinSoni = 0;

function guessNumber() {
  attemps++;
  totalAttemps--;
  let userGuess = Number(inputEl.value);
  if (userGuess == randomNumber) {
    messageEl.textContent = "Табриклайман Сиз топдингиз!";
    numberEl.textContent = randomNumber;
    divchaEl.classList.remove("bg-violet-400");
    divchaEl.classList.add("bg-green-600");
    oyinSoni++;
    againEl.classList.remove("hidden");
    checkEl.classList.add('hidden')
  } else if (userGuess < randomNumber) {
    message.textContent = "Сиз киритган рақам менинг рақамимдан кичкина!";
  } else if (userGuess > randomNumber) {
    message.textContent = "Сиз киритган рақам менинг рақамимдан катта!";
  }

  attempsEL.textContent = attemps;
  recordEl.textContent = totalAttemps;
  if (totalAttemps < 1) {
    messageEl.textContent = "Сизни имкониятларингиз тугади!";
    checkEl.classList.add("hidden");
    againEl.classList.remove("hidden");
  }
}

function reset() {
  totalAttemps = 20 - oyinSoni;
  randomNumber = Math.floor(Math.random() * 20) + 1;

  messageEl.textContent = "";
  numberEl.textContent = "?";
  divchaEl.style.backroundColor = "transparent";
  attempsEL.textContent = attemps;
  recordEl.textContent = totalAttemps;
  checkEl.classList.remove("hidden");
  againEl.classList.add("hidden");

  if (totalAttemps < 1) {
    messageEl.textContent = "Сизни имкониятингиз қолмади. Ўйин тугади!";
    checkEl.classList.add("hidden");
    againEl.classList.add("hidden");
  }
}

checkEl.addEventListener("click", guessNumber);
againEl.addEventListener("click", reset);
