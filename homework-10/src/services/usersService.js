import { API_URL } from "../constants";

export function getUsersList() {
  return fetch(API_URL).then((res) => res.json());
}

export function createUser(item) {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(item),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

export function editUser(item) {
  return fetch(API_URL + "/" + item.id, {
    method: "PUT",
    body: JSON.stringify(item),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

export function getUser(id) {
  return fetch(API_URL + "/" + id).then((res) => res.json());
}

export function deleteUser(id) {
  return fetch(API_URL + "/" + id, {
    method: "DELETE",
  }).then((res) => res.json());
}
