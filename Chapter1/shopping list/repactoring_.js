const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");
const items = document.querySelector(".items");

function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  const item = CreateItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });
  input.value = "";
  input.focus();
}

let id = 0;
function CreateItem(text) {
  const itemRow = document.createElement("li");
  itemRows.setAttribute("class", "item_row");
  itemRows.setAttribute("data-id", id);
  itemRow.innerHTML = `

    /// text = input.valute
    div class ='item'>
            <span class="item__name">${text}<span> 
            <button class="item__delete" data-id=${id}>x</button>
        </div>
        <div clss="item__divider"></div>`;

  id++;
  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (event) => {
  if (keypress.key === Enter) {
    onAdd();
  }
});

items.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDelted = document.querySelector(`.itemRow[data-id="${id}"]`);
    // 생선된 아이템

    toBeDelted.remove();
  }
});
