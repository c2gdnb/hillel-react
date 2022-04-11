import { useState } from "react";

export function useAsync(cb, defaultValue = []) {
  const [data, setData] = useState(defaultValue);

  function run() {
    cb()
      .then((data) => {
        setData(data);
        return data;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  return {
    data,
    setData,
    run,
  };
}
