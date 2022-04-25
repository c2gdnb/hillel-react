import api from "../api/api";

export function getData(url) {
  return api.get(url).then((resp) => resp.data);
}