const list = document.querySelector(".js-toDoList");
const form = document.querySelector(".todo_inPut");
const input = form.querySelector("input");

const USER_LS = "currentUser";

function askForName() {
  form.addEventListener("submit", handleSubit);
}

function handleSubit() {
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function paintGreeting(text) {
  console.log(text);
  const li = document.createElement("li");
  li.innerHTML = `Hello ${text}`;
  list.appendChild(li);

  return li;
}

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
