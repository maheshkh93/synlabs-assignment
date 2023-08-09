//Function to get users
export function customGet(url) {
  return fetch("https://jsonplaceholder.typicode.com" + url, {
    method: "GET",
  }).then((s) => s.json());
}

//Function to create a user
export function customPost(url, obj) {
  return fetch("https://jsonplaceholder.typicode.com" + url, {
    method: "POST",
    body: JSON.stringify(obj),
  }).then((s) => s.json());
}

//Function to edit a user
export function customPut(url, obj) {
  return fetch("https://jsonplaceholder.typicode.com" + url, {
    method: "PUT",
    body: JSON.stringify(obj),
  }).then((s) => s.json());
}

//Function to delete a user
export function customDelete(url) {
  return fetch("https://jsonplaceholder.typicode.com" + url, {
    method: "DELETE",
  }).then((s) => s.json());
}
