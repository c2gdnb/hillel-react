import api from "../api/api";
import { API_URL } from "../constants";

export function getsTodoList() {
  return api.get(API_URL).then((resp) => resp.data);
}

export function getTodo(id) {
  return api.get(API_URL + "/" + id).then((resp) => resp.data);
}

export function deleteTodo(id) {
  return api.delete(API_URL + "/" + id).then((resp) => resp.data);
}

export function updateTodo(todo) {
  return api.put(API_URL + "/" + todo.id, todo).then((resp) => resp.data);
}
export function createTodo(todo) {
  return api.post(API_URL, todo).then((resp) => resp.data);
}
