const items = document.querySelector(".js-toDoList");
const input = document.querySelector("input");
const addBtn = document.querySelector(".button");

let toDo = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;

  console.log(li);
  items.removeChild(li);
  let cleanToDos = toDo.filter((x) => {
    console.log(x.id, parseInt(li.id));
    return x.id !== parseInt(li.id);
  });
  toDo = cleanToDos;
  saveToDolist();
}

function onAdd(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  const newId = toDo.length + 1;
  btn.innerHTML = "x";
  btn.addEventListener("click", deleteToDo);
  span.innerHTML = text;
  li.appendChild(span);
  li.appendChild(btn);
  li.id = newId;
  items.appendChild(li);

  const toDoList = {
    text: text,
    id: newId,
  };

  toDo.push(toDoList);
  saveToDolist();
}

function saveToDolist() {
  localStorage.setItem("todoList", JSON.stringify(toDo));
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  onAdd(currentValue);
  input.value = "";
}

function loadToDos() {
  const loadedToDo = localStorage.getItem("todoList");
  console.log(loadedToDo);
  if (loadedToDo !== null) {
    const pasredToDo = JSON.parse(loadedToDo);
    pasredToDo.forEach(function (hello) {
      onAdd(hello.text);
      console.log(hello.text);
    });
  }
}
function init() {
  loadToDos();
  addBtn.addEventListener("click", handleSubmit);
}

init();
