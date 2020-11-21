const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const USER_LI = "todoList";

let toDos = [];
// 할일 입력 > 저장 > 리스트

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDOs();
}

function askTodo() {
  toDoForm.addEventListener("submit", handleSubmitTodo);
}

function handleSubmitTodo(event) {
  event.preventDefault();
  const currentTodo = toDoInput.value;
  paintTodo(currentTodo);
  saveToDOs(currentTodo);
}

function saveToDOs(text) {
  localStorage.setItem(USER_LI, JSON.stringify(toDos));
}

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;

  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  toDoInput.value = "";
  toDoInput.focus();
  saveToDOs();
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(USER_LI);
  if (loadedToDos !== null) {
    console.log(loadedToDos);

    const parsedToDos = JSON.parse(loadedToDos);
    console.log(parsedToDos);
    parsedToDos.forEach(function (toDo) {
      paintTodo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  askTodo();
}

init();