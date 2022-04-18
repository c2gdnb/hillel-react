import { useState } from "react";
import Contacts from "./components/contacts/Contacts";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("rows");
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      <Contacts />
    </ThemeContext.Provider>
  );
}

export default App;
