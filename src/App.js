import NavbarM from "./componnets/Navbar";
import { createContext, useState } from "react";
import CreateCard from "./componnets/Card";

export const ThemeContext = createContext(null);

function App() {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  const detectSystemTheme = () => {
    if (darkThemeMq.matches) {
      document.documentElement.setAttribute("data-theme", "dark");
      return "dark";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      return "light";
    }
  };
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", saved);
    return saved || detectSystemTheme();
  });
  const isDarkTheme = theme === "dark";

  darkThemeMq.addListener((e) => {
    if (e.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  });

  const toggleTheme = () => {
    setTheme((current) => {
      localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
      document.documentElement.setAttribute(
        "data-theme",
        current === "light" ? "dark" : "light"
      );
      return current === "light" ? "dark" : "light";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App">
        <NavbarM
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
          theme={theme}
        />
        <CreateCard />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
