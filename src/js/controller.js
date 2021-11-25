import * as model from './model.js'
import * as view from "./view.js";

const url = "http://localhost:3000/comments";
const form = document.querySelector('.js-main-form');
const formText = document.querySelector('.js-main-form-text');
let itemBlock = document.querySelector(".js-render");

const getItemsAndRender = function getItems(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      view.render(json);
      view.quantityItem(json.filter((value) => !value.completed).length);
    });
}

getItemsAndRender(url);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  model.addItem(url, formText.value);
  getItemsAndRender(url);
  formText.value = null;
});

itemBlock.addEventListener("click", (event) => {
  if (event.target.dataset.pointer == "deleteItem") {
    model.deteteItem(url, event.target.closest(".js-render__item").dataset.id);
  }

  if (event.target.dataset.pointer == "changeStatusItem") {
    model.changeItem(
      url,
      event.target.closest(".js-render__item").dataset.id,
      event.target.checked
    );
  }

  getItemsAndRender(url);
});