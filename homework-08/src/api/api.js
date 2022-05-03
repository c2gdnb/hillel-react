import axios from "axios";
import { API_URL, API_URL_MOCKAPI } from "../constants";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiUsers = axios.create({
  baseURL: API_URL_MOCKAPI,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api, apiUsers };
