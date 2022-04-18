import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./ContactThemeSwitcher.css";

function ContactThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  function onSwitchThemeClick() {
    setTheme(theme === "rows" ? "colums" : "rows");
  }

  return (
    <div className="switch-theme">
      <span>Change theme</span>
      <button className="switch-theme__btn" onClick={onSwitchThemeClick}>
        {theme === "rows" ? "💣" : "🔥"}
      </button>
    </div>
  );
}

export default ContactThemeSwitcher;
