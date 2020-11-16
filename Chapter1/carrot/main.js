const GAME_DURATION_SEC = 5;
const CARROT_SIZE = 120;
const CARROT_COUNT = 10;
const BUG_COUNT = 10;

const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector(".game__button");
const gameTimer = document.querySelector(".game__timer");
const gameScore = document.querySelector(".game__score");

const popUp = document.querySelector(".pop-up");
const popUpText = document.querySelector(".pop-up__message");
const popUpRefresh = document.querySelector(".pop-up__refresh");

let started = false;
let score = 0;
let timer = undefined;

field.addEventListener("click", onFildClick);

function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      clearInterval(timer);
      finishGame(CARROT_COUNT === score);
      return;
    }
    updateTimerText(--remainingTimeSec);
  }, 1000);
}

function startGame() {
  started = true;
  initGame();
  showStopButton();
  showTimerAndScore();
  startGameTimer();
}
function finishGame(win) {
  started = false;
  hideGameButton();
  showPopUpWithText(win ? "You Won" : "You Lost");
}

function stopGame() {
  started = false;
  stopGameTimer();
  hideGameButton();
  showPopUpWithText("REPLAY?");
}
function updateScorBoard() {
  gameScore.innerHTML = CARROT_COUNT - score;
}
function updateTimerText(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  gameTimer.innerText = `${minutes} : ${seconds}`;
}

function stopGameTimer() {
  clearInterval(timer);
}

popUpRefresh.addEventListener("click", () => {
  startGame();
  hidePopup();
});

gameBtn.addEventListener("click", () => {
  console.log("he");
  if (started) {
    stopGame();
  } else {
    startGame();
  }
});
function hideGameButton() {
  gameBtn.style.visibility = "hidden";
}

function showStopButton(text) {}

function showPopUpWithText(text) {
  popUpText.innerText = text;
  popUp.classList.remove("pop-up__hide");
}

function hidePopup() {
  popUp.classList.add("pop-up__hide");
}

function showTimerAndScore() {
  gameTimer.style.visibility = " visible";
  gameScore.style.visibility = " visible";
}
function showStopButton() {
  const icon = gameBtn.querySelector(".play");
  icon.classList.add("stop");
  icon.setAttribute("src", "img/stop.png");
}

function initGame() {
  gameScore.innerText = CARROT_COUNT;
  field.innerHTML = "";
  addItem("carrot", CARROT_COUNT, "img/carrot.png");
  addItem("bug", BUG_COUNT, "img/bug.png");
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - CARROT_SIZE;
  const y2 = fieldRect.height - CARROT_SIZE;

  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imgPath);
    item.style.position = "absolute";
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

function onFildClick(event) {
  if (!started) {
    return;
  }
  const target = event.target;
  if (target.matches(".carrot")) {
    target.remove();
    score++;
    updateScorBoard();
    if (score === CARROT_COUNT) {
      finishGame(true);
    }
  } else if (target.matches(".bug")) {
    stopGameTimer();
    finishGame(false);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
