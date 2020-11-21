const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(imgNumber) {
  const img = new Image();
  img.src = `imgs/${imgNumber + 1}.jpg`;
  body.appendChild(img);
  img.classList.add("bgImage");
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
