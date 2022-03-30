const URL = "https://612687da3ab4100017a68fd8.mockapi.io/contacts";

export async function getContacts() {
  const response = await fetch(URL);
  return await response.json();
}

export async function deleteContact(id) {
  const response = await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
  return await response.json();
}

export async function createContact(contact) {
  const res = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(contact),
    headers: { "Content-Type": "application/json" },
  });
  return await res.json();
}
