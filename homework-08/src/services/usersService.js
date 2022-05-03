import { apiUsers } from "../api/api";
import { USERS_URI } from "../constants";

export async function getUsersList() {
  const resp = await apiUsers.get(USERS_URI);
  return resp.data;
}

export async function getUser(userId) {
  const resp = await apiUsers.get(`${USERS_URI}/${userId}`);
  return resp.data;
}