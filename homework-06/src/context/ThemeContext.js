import { createContext } from "react";

const ThemeContext = createContext({
  theme: "rows",
  setTheme: () => {},
});

export default ThemeContext;
