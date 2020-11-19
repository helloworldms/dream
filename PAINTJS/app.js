// 요소 데려오기
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("range");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");
const clear = document.getElementById("jsClear");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 500;

//
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

// 초기값
let painting = false;
let filling = false;

//마우스 이벤트
// start paintind
// stop painting
// on mouse up
// on mouse move
function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

// 버튼 클릭시 텍스트 변경
function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerHTML = "Fill";
  } else {
    filling = true;
    mode.innerHTML = "Line";
  }
}
// 브러시 사이즈 변경
function hadleBrushSize(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}
// 버튼 선택시 컬러변경
function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}
// 버튼 선택시 컬러 채움
function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}
function handleClearClick() {
  if (clear) {
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}
// 저장버튼
function handleSaveClick() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS[🎨]";
  link.click();
}
// 기본 이벤트 막음
function handleCM(event) {
  event.preventDefault();
}

/// rout

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (range) {
  range.addEventListener("input", hadleBrushSize);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}
if (clear) {
  clear.addEventListener("click", handleClearClick);
}

if (save) {
  save.onclick = handleSaveClick;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}
