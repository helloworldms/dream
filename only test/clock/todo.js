const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const USER_LI = "todoList";

let toDos = [];
// 할일 입력 > 저장 > 리스트

//
const arraySparse = [1, 3, , 7];
let numCallbackRuns = 0;

arraySparse.forEach(function (element) {
  console.log(element);
  numCallbackRuns++;
});

console.log(numCallbackRuns);

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== JSON.parse(li.id);
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
  delBtn.innerHTML = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="16px" height="15px" viewBox="0 0 16 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Cancel</title>
      <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
          <path d="M1.5,1 L10.3415527,9.84155273 L14.5,14 M14.5,1 L5.65844727,9.84155273 L1.5,14" id="Cancel" stroke="#FFFFFF" stroke-width="2"></path>
      </g>
  </svg>`;
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
    const parsedToDos = JSON.parse(loadedToDos);
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
