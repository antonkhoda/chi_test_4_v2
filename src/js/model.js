import * as controller from "./controller.js";

export function getItems(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      controller.render(json);
      controller.quantityItem(json.filter((value) => !value.completed).length);
    });
}

export function addItem(url, itemTitle) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      title: itemTitle,
      completed: false,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      alert("ERROR: " + error);
    });
}

export function changeItem(url, itemId, itemCompletedStatus) {
  fetch(url + "/" + itemId, {
    method: "PATCH",
    body: JSON.stringify({
      completed: itemCompletedStatus,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      alert("ERROR: " + error);
    });
}

export function deteteItem(url, itemId) {
  fetch(url + "/" + itemId, {
    method: "DELETE",
  });
}
