import React, { useContext } from "react";
// import ThemeSwitcherApiContext from "./ThemeSwitcherApiContext";

const ThemeSwitcherApi = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};

export default ThemeSwitcherApi;
