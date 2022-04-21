import api from "../api/api";

export function getContactsList(url) {
  return api.get(url).then((resp) => resp.data);
}

export function createContact(url, contact) {
  return api.post(url, contact).then((resp) => resp.data);
}

export function updateContact(url, contact) {
  return api.put(url + "/" + contact.id).then((resp) => resp.data);
}

export function deleteContact(url, id) {
  return api.delete(`${url}/${id}`).then((resp) => resp.data);
}