const itemBlock = document.querySelector('.js-render');
const infoBlock = document.querySelector('.js-main-info');

export function render(obj) {
  removeAllChildNodes(itemBlock);
  let renderResult = '';
  obj.forEach(element =>
    renderResult += `<div class="js-render__item" data-id='${element.id}'>
    <input type="checkbox" ${element.completed ? "checked" : ""} class="js-render__item-status" data-pointer="changeStatusItem">
    <span class="js-render__item-txt ${element.completed ? "js-render__item-txt--checked": ""}">${element.title}</span>
    <div class="js-render__item-delete" data-pointer="deleteItem"></div>
  </div>`);
  itemBlock.insertAdjacentHTML('beforeend', renderResult)
}

export function quantityItem(quantity) {
  if (!quantity) {
    return;
  }

  if (quantity === 1) {
    infoBlock.textContent = quantity + " item left";
  }

  infoBlock.textContent = quantity + " items left";
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}