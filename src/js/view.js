import * as model from './model.js'

const url = "http://localhost:3000/comments";
const form = document.querySelector('.js-main-form');
const formText = document.querySelector('.js-main-form-text');
let itemBlock = document.querySelector(".js-render");
//const deteteBtn = document.getElementsByClassName('js-render__item-delete');

model.getItems(url)

form.addEventListener("submit", (event) => {
  event.preventDefault();
  model.addItem(url, formText.value);
  //model.getItems(url);
  formText.value = null;
});

//console.log(deteteBtn);

// deteteBtn.addEventListener('click', () => {
//   console.log(this);
// })

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

  //model.getItems(url);
});