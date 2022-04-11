import { API_URL } from "../constants";

export async function getNotes() {
  const res = await fetch(API_URL);
  return await res.json();
}

export async function createNote(note) {
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(note),
    headers: { "Content-Type": "application/json" },
  });
  return await res.json();
}

export async function updateNote(note) {
  const res = await fetch(API_URL + note.id, {
    method: "PUT",
    body: JSON.stringify(note),
    headers: { "Content-Type": "application/json" },
  });
  return await res.json();
}

export async function deleteNote(id) {
  const res = await fetch(API_URL + id, {
    method: "DELETE",
  });
  return await res.json();
}
