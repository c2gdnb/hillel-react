import { API_URL } from "../constants";

export function getContactsList() {
  return fetch(API_URL).then((res) => res.json());
}

export function createContact(contact) {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(contact),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

// export function updateContact(contact) {
//   return fetch(URL + contact.id, {
//     method: "PUT",
//     body: JSON.stringify(contact),
//     headers: { "Content-Type": "application/json" },
//   }).then((res) => res.json());
// }

export function deleteContact(id) {
  return fetch(API_URL + id, {
    method: "DELETE",
  }).then((res) => res.json());
}
