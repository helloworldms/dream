const form = document.querySelector(".form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_ON = "showing";

// 입력 > 로컬스토리지 저장 >  저장된 사람이면 부르고 아니면 입력하게 하기

//이름 입력 문의
function askForName() {
  form.classList.add(SHOWING_ON);
  form.addEventListener("submit", handleSubmit);
}
// 입력값 받기
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);

  // 입력 저장
  function saveName(text) {
    localStorage.setItem(USER_LS, text);
  }
}
//값 출력
function paintGreeting(text) {
  form.classList.remove(SHOWING_ON);
  greeting.classList.add(SHOWING_ON);
  greeting.innerText = `Hello ${text}`;
}
//값이 있으면 출력 아니믄 입력값 받기
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
    //user null
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
