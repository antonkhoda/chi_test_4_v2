export function addItem(url, itemTitle) {
  return fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title: itemTitle,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .catch((error) => {
      alert("ERROR: " + error);
    });
}

export function changeItem(url, itemId, itemCompletedStatus) {
  return fetch(url + "/" + itemId, {
      method: "PATCH",
      body: JSON.stringify({
        completed: itemCompletedStatus,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .catch((error) => {
      alert("ERROR: " + error);
    });
}

export function deteteItem(url, itemId) {
  return fetch(url + "/" + itemId, {
    method: "DELETE",
  })
}