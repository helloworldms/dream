"use strict";

class Popup {
  constructor() {
    this.poUp = document.querySelector(".pop-up");
    this.popUpText = document.querySelector(".pop-up__message");
    this.popUpRefresh = document.querySelector(".pop-up__refresh");
    popUpRefresh.addEventListener(`click`, () => {
      this.onclick && this.onclick();
      hide();
    });
  }

  setClickListener(onclick) {
    this.onclick = onclick;
  }

  showWithText(text) {
    this.popupText.innerText = text;
    this.popUp.classList.remove(`pop-up--hide`);
  }

  hide() {
    this.popUp.classlist.add(`pop-up--hide`);
  }
}
